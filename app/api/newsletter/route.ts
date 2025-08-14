import { Resend } from "resend";

// Only initialize Resend if the API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const POST = async (request: Request) => {
  // Check if Resend is properly configured
  if (!resend || !process.env.RESEND_AUDIENCE_ID) {
    return Response.json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  const { email } = await request.json();

  // Create contact
  try {
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json(
      { error: "Error subscribing to updates" },
      { status: 400 }
    );
  }
};
