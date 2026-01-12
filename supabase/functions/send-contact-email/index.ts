import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// In-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests
const RATE_LIMIT_WINDOW_MS = 3600000; // Per hour (1 hour in ms)

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

// HTML escape function to prevent XSS in email templates
function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Input validation
function validateInput(formData: ContactFormData): { valid: boolean; error?: string } {
  // Required fields
  if (!formData.name || formData.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (!formData.email || formData.email.trim().length === 0) {
    return { valid: false, error: "Email is required" };
  }
  if (!formData.message || formData.message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }

  // Length limits
  if (formData.name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }
  if (formData.email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }
  if (formData.phone && formData.phone.length > 30) {
    return { valid: false, error: "Phone must be less than 30 characters" };
  }
  if (formData.service && formData.service.length > 100) {
    return { valid: false, error: "Service must be less than 100 characters" };
  }
  if (formData.message.length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { valid: false, error: "Invalid email format" };
  }

  return { valid: true };
}

// Rate limiting check
function checkRateLimit(clientIP: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // First request or window expired - reset
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (clientData.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((clientData.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment count
  clientData.count++;
  rateLimitMap.set(clientIP, clientData);
  return { allowed: true };
}

// Clean up old rate limit entries periodically
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Clean up old entries periodically
  cleanupRateLimitMap();

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") ||
                     req.headers.get("x-real-ip") ||
                     "unknown";

    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests. Please try again later.",
          retryAfter: rateLimit.retryAfter 
        }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json", 
            "Retry-After": String(rateLimit.retryAfter),
            ...corsHeaders 
          },
        }
      );
    }

    const formData: ContactFormData = await req.json();
    
    // Validate input
    const validation = validateInput(formData);
    if (!validation.valid) {
      console.warn(`Input validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Form data received, processing email...");

    // Escape all user input for HTML template
    const safeName = escapeHtml(formData.name);
    const safeEmail = escapeHtml(formData.email);
    const safePhone = escapeHtml(formData.phone || "Not provided");
    const safeService = escapeHtml(formData.service || "Not specified");
    const safeMessage = escapeHtml(formData.message);
    const safeTimestamp = escapeHtml(formData.timestamp);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4A90E2, #00D9FF); padding: 20px; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }
          .field-label { font-weight: bold; color: #4A90E2; }
          .field-value { margin-top: 5px; white-space: pre-wrap; word-break: break-word; }
          .footer { margin-top: 20px; padding: 15px; background: #0A1628; color: white; border-radius: 10px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Lead from Nexora Website</h1>
          </div>
          <div class="content">
            <h2>Hi Ali,</h2>
            <p>You have a new form submission on Nexora website!</p>
            
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${safeName}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${safeEmail}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${safePhone}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Service Interest</div>
              <div class="field-value">${safeService}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${safeMessage}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Timestamp</div>
              <div class="field-value">${safeTimestamp}</div>
            </div>
            
            <h3>Next Steps</h3>
            <ol>
              <li>Respond within 2 hours</li>
              <li>Call/WhatsApp: ${safePhone}</li>
              <li>Send follow-up email to: ${safeEmail}</li>
            </ol>
          </div>
          <div class="footer">
            <p>Nexora Notification System</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Nexora <onboarding@resend.dev>",
      to: ["nexora.busniess@gmail.com"],
      subject: `New Lead from Nexora Website - ${safeService}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
