import nodemailer from 'nodemailer';
import { NextResponse, type NextRequest } from 'next/server';
import * as dns from 'dns';

// Force IPv4 DNS resolution
dns.setDefaultResultOrder('ipv4first');

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function isContactPayload(value: unknown): value is {
  name: string;
  email: string;
  message: string;
} {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    'name' in value &&
    typeof value.name === 'string' &&
    'email' in value &&
    typeof value.email === 'string' &&
    'message' in value &&
    typeof value.message === 'string'
  );
}

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!isContactPayload(payload)) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  if (name.length > 200 || email.length > 254) {
    return NextResponse.json(
      { error: 'Name or email address is too long.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: 'Message is too long (max 5000 characters)' },
      { status: 400 }
    );
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  if (!emailUser || !emailPassword) {
    console.error('Contact form email configuration is missing.');
    return NextResponse.json(
      { error: 'The contact form is temporarily unavailable.' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
    logger: false,
    debug: false,
    connectionTimeout: 10000,
    socketTimeout: 10000,
  });

  const companyMailOptions = {
    from: emailUser,
    to: emailUser,
    subject: 'New contact form submission - DG techinfra',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
    replyTo: email,
  };

  const userMailOptions = {
    from: emailUser,
    to: email,
    subject: 'We received your message - DG techinfra',
    html: `
      <h2>Thank you for contacting DG techinfra</h2>
      <p>Dear ${escapeHtml(name)},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <hr>
      <p><strong>Your Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Best regards,<br>DG techinfra Team</p>
      <p>📍 5, Nehru Outer Ring Road Sambhupur, Dundigal, Hyderabad, Telangana 500043</p>
      <p>📞 +91 98480 05059</p>
      <p>📧 connect@dgtechinfra.com</p>
    `,
  };

  try {
    await transporter.sendMail(companyMailOptions);
  } catch (error) {
    console.error('Contact enquiry email failed:', error);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again later.' },
      { status: 502 }
    );
  }

  try {
    await transporter.sendMail(userMailOptions);
  } catch (error) {
    console.error('Contact confirmation email failed:', error);
  }

  return NextResponse.json(
    {
      success: true,
      message: 'Thank you! We have received your message and will contact you soon.',
    },
    { status: 200 }
  );
}
