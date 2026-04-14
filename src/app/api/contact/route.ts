import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Clean data
    const visitorEmail = email.trim();
    const visitorName = name.trim();
    const visitorSubject = subject.trim();
    const visitorMessage = message.trim();
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""); // Remove spaces just in case

    if (!gmailUser || !gmailPass) {
      console.error("[Contact API] Missing environment variables GMAIL_USER or GMAIL_APP_PASSWORD");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Gmail SMTP Configuration with explicit host/port
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 1. Notification Email to the Site Owner (You)
    const ownerMailOptions = {
      from: `"Portfolio Lead" <${gmailUser}>`,
      to: gmailUser,
      replyTo: visitorEmail,
      subject: `[Lead] ${visitorSubject} - from ${visitorName}`,
      html: `
        <div style="font-family: 'Bai Jamjuree', sans-serif, system-ui; max-width: 500px; margin: 40px auto; background-color: #fff; border: 4px solid #000; padding: 40px; box-shadow: 12px 12px 0px hsl(14, 98%, 50%); text-align: left;">
          <h2 style="color: #000; margin: 0 0 24px 0; font-size: 24px; text-transform: uppercase;">New Inquiry Received <span style="color: hsl(14, 98%, 50%);">.</span></h2>
          
          <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; color: #666; font-weight: 700; letter-spacing: 1px;">From</p>
            <p style="margin: 0; font-size: 16px; color: #000; font-weight: 600;">${visitorName}</p>
          </div>

          <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; color: #666; font-weight: 700; letter-spacing: 1px;">Email / Reply-To</p>
            <p style="margin: 0; font-size: 16px; color: hsl(14, 98%, 50%); font-weight: 600;">${visitorEmail}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; color: #666; font-weight: 700; letter-spacing: 1px;">Subject</p>
            <p style="margin: 0; font-size: 16px; color: #000; font-weight: 600;">${visitorSubject}</p>
          </div>

          <div style="background-color: #f9f9f9; border: 2px solid #000; padding: 25px; margin-top: 20px;">
            <p style="margin: 0 0 10px; font-size: 11px; text-transform: uppercase; color: hsl(14, 98%, 50%); font-weight: 700; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; font-size: 15px; color: #333; line-height: 1.7; white-space: pre-wrap;">${visitorMessage}</p>
          </div>
        </div>
      `,
    };

    // 2. Confirmation Email to the Visitor (The Sender)
    const visitorMailOptions = {
      from: `"Yuvashree Portfolio" <${gmailUser}>`,
      to: visitorEmail,
      subject: `Received: ${visitorSubject}`,
      html: `
        <div style="font-family: 'Bai Jamjuree', sans-serif, system-ui; max-width: 500px; margin: 40px auto; background-color: #fff; border: 4px solid #000; padding: 40px; box-shadow: 12px 12px 0px hsl(14, 98%, 50%); text-align: left;">
          <h2 style="color: #000; margin: 0 0 20px 0; font-size: 24px; text-transform: uppercase;">Inquiry Received <span style="color: hsl(14, 98%, 50%);">.</span></h2>
          
          <p style="font-size: 16px; color: #333; margin: 0 0 30px; line-height: 1.6;">
            Hi <strong>${visitorName}</strong>,<br/><br/>
            Thank you for reaching out. I have received your message regarding <strong>"${visitorSubject}"</strong> and will get back to you personally as soon as possible.
          </p>

          <div style="margin-top: 40px;">
            <p style="margin: 0; font-size: 16px; font-weight: 700; text-transform: uppercase; color: #000;">Yuvashree</p>
            <p style="margin: 4px 0 0; font-size: 14px; color: hsl(14, 98%, 50%);">UI & UX Designer</p>
          </div>
        </div>
      `,
    };

    // Send emails sequentially to ensure reliability and better error tracking
    console.log(`[Contact API] Attempting to send lead notification to owner: ${gmailUser}`);
    await transporter.sendMail(ownerMailOptions);
    console.log("[Contact API] Owner notification sent.");

    console.log(`[Contact API] Attempting to send confirmation to visitor: ${visitorEmail}`);
    await transporter.sendMail(visitorMailOptions);
    console.log("[Contact API] Visitor confirmation sent.");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("[Contact API] Error details:", error.message || error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

