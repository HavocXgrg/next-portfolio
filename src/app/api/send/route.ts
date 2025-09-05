import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Defining the shape of the expected request body using Zod
const contactFormSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body against the schema
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      // If validation fails, return a 400 error with the issues
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    const { fullName, email, message } = parsed.data;

    // Send the email using Resend
// Send the email using Resend
const { data, error } = await resend.emails.send({
  from: 'Contact Form <onboarding@resend.dev>', // Changed to your verified domain after verified in resend
  to: ['108havocx108@gmail.com'], 
  subject: `New Message from ${fullName}`,
  replyTo: email, 
  html: `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}