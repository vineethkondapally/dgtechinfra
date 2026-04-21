import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length (prevent extremely large payloads)
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    // Create transporter inside function to ensure fresh env vars
    console.log('📧 Creating transporter...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD);
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASSWORD || '',
      },
      logger: false,
      debug: false,
      connectionTimeout: 10000,
      socketTimeout: 10000,
    } as any);

    // Email to your company (using authenticated email address)
    const companyMailOptions = {
      from: process.env.EMAIL_USER || 'info@dgtechinfra.com',
      to: process.env.EMAIL_USER || 'info@dgtechinfra.com', // Send to the authenticated email
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'info@dgtechinfra.com',
      to: email,
      subject: 'We received your message - DHRITI Global',
      html: `
        <h2>Thank you for contacting DHRITI Global</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>DHRITI Global Team</p>
        <p>📍 5, Nehru Outer Ring Road Sambhupur, Dundigal, Hyderabad, Telangana 500043</p>
        <p>📞 +91 9948146882</p>
        <p>📧 info@dgtechinfra.com</p>
      `,
    };

    // Send both emails asynchronously without waiting
    // This allows the API to respond immediately to user
    (async () => {
      try {
        // Send both emails in parallel for speed
        await Promise.all([
          transporter.sendMail(companyMailOptions).catch(err => {
            console.error('✗ Company email failed:', err);
          }),
          transporter.sendMail(userMailOptions).catch(err => {
            console.error('✗ User confirmation email failed:', err);
          })
        ]);
        console.log('✓ Both emails sent successfully');
      } catch (error) {
        console.error('✗ Email sending error:', error);
      }
    })();

    // Return response immediately without waiting for emails
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We have received your message and will contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { error: `Failed to process your request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
