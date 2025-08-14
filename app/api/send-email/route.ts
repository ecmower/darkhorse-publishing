import { Resend } from "resend";

// Only initialize Resend if the API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const POST = async (request: Request) => {
  // Check if Resend is properly configured
  if (!resend) {
    return Response.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const { to, subject, content, from = "noreply@yourdomain.com" } = await request.json();

    // Validate required fields
    if (!to || !subject || !content) {
      return Response.json(
        { error: "Missing required fields: to, subject, content" },
        { status: 400 }
      );
    }

    // Send email
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html: content,
    });

    return Response.json({ 
      success: true, 
      messageId: result.data?.id,
      message: "Email sent successfully" 
    });

  } catch (error: any) {
    console.error("Email sending error:", error);
    return Response.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
};
