import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Users need to create an account at https://www.emailjs.com/
// and replace these with their actual credentials
export const EMAILJS_SERVICE_ID = 'service_nexora';
export const EMAILJS_TEMPLATE_ID = 'template_nexora';
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with actual key

// WhatsApp Configuration
export const WHATSAPP_NUMBER = '923255446976'; // +92 325 5446976
export const BUSINESS_EMAIL = 'nexora.busniess@gmail.com';
export const BUSINESS_PHONE = '+92 325 5446976';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

// Send email notification
export const sendEmailNotification = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || 'Not provided',
      service_type: formData.service || 'Not specified',
      budget_range: formData.budget || 'Not specified',
      user_message: formData.message,
      form_type: 'Contact Form',
      page_url: window.location.href,
      timestamp: new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Karachi',
        dateStyle: 'full',
        timeStyle: 'long'
      }),
      to_email: BUSINESS_EMAIL,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully' };
    }
    return { success: false, message: 'Failed to send email' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, message: 'Failed to send email notification' };
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
📊 *SUBMISSION INFO*
━━━━━━━━━━━━━━━━━━━━━━━━

🌐 *Page:* ${window.location.href}
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

// Open WhatsApp with notification
export const sendWhatsAppNotification = (formData: ContactFormData): void => {
  const url = generateWhatsAppNotification(formData);
  // We don't auto-open to avoid popup blockers, but we could trigger this
  // The main notification is via email, WhatsApp is backup
  console.log('WhatsApp notification URL generated:', url);
};
