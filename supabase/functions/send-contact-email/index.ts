import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", JSON.stringify(formData));

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
          .field-value { margin-top: 5px; }
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
              <div class="field-value">${formData.name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${formData.email}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${formData.phone || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Service Interest</div>
              <div class="field-value">${formData.service}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${formData.message}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Timestamp</div>
              <div class="field-value">${formData.timestamp}</div>
            </div>
            
            <h3>Next Steps</h3>
            <ol>
              <li>Respond within 2 hours</li>
              <li>Call/WhatsApp: ${formData.phone || "N/A"}</li>
              <li>Send follow-up email to: ${formData.email}</li>
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
      subject: `New Lead from Nexora Website - ${formData.service}`,
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
