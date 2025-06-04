import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, email, message } = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName}
Email: ${email}

Message:
${message}
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'supportpat@learningtotrade.com',
      subject: 'New Contact Form Submission',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
      replyTo: email, // This allows you to reply directly to the sender
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 