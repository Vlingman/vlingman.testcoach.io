import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, preferredDate, preferredTime, message }: ConsultationRequest = await req.json();

    console.log("Received consultation request:", { name, email, preferredDate, preferredTime });

    // Send notification email to the coach
    const notifyEmail = Deno.env.get("CONSULTATION_NOTIFY_TO") || "vabba.lingman@gmail.com";
    const notificationResponse = await resend.emails.send({
      from: "Consultation Requests <onboarding@resend.dev>",
      to: [notifyEmail],
      subject: `New Consultation Request from ${name}`,
      html: `
        <h1>New Consultation Request</h1>
        <p>You have received a new consultation request with the following details:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Preferred Date</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${preferredDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Preferred Time</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${preferredTime}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px;">Please respond to confirm the consultation time.</p>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the requester
    const confirmationResponse = await resend.emails.send({
      from: "Consultation <onboarding@resend.dev>",
      to: [email],
      subject: "Your Consultation Request Received!",
      html: `
        <h1>Thank you for your consultation request, ${name}!</h1>
        <p>I have received your request for a free 30-minute consultation.</p>
        <p><strong>Requested Date:</strong> ${preferredDate}</p>
        <p><strong>Requested Time:</strong> ${preferredTime}</p>
        ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
        <p>I will get back to you within 24 hours to confirm your consultation time.</p>
        <p>Best regards,<br>Your Strongman Coach</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Consultation request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-request function:", error);
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
