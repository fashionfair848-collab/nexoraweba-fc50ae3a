import { supabase } from "@/integrations/supabase/client";

// WhatsApp Configuration
export const WHATSAPP_NUMBER = '923255446976'; // +92 325 5446976
export const BUSINESS_EMAIL = 'nexora.busniess@gmail.com';
export const BUSINESS_PHONE = '+92 325 5446976';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Send email notification via Resend edge function
export const sendEmailNotification = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'Asia/Karachi',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const { data, error } = await supabase.functions.invoke("send-contact-email", {
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message,
        timestamp,
      },
    });

    if (error) {
      console.error("Edge function error:", error);
      return {
        success: false,
        message: "Failed to send email notification",
      };
    }

    console.log("Email sent successfully via Resend:", data);
    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Email notification error:", error);
    return {
      success: false,
      message: "Failed to send email notification",
    };
  }
};

// Generate WhatsApp notification URL
export const generateWhatsAppNotification = (formData: ContactFormData): string => {
  const message = `🚀 *NEW LEAD FROM NEXORA WEBSITE*

━━━━━━━━━━━━━━━━━━━━━━━━
📋 *LEAD DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
💼 *Service:* ${formData.service || 'Not specified'}
💰 *Budget:* ${formData.budget || 'Not specified'}

📝 *Message:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━
🕐 *Time:* ${new Date().toLocaleString('en-US', { 
    timeZone: 'Asia/Karachi',
    dateStyle: 'full',
    timeStyle: 'short'
  })}

━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *NEXT STEPS*
━━━━━━━━━━━━━━━━━━━━━━━━

1. Respond within 2 hours
2. Call/WhatsApp: ${formData.phone}
3. Send follow-up email

━━━━━━━━━━━━━━━━━━━━━━━━`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
