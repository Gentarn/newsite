import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, token } = body;

    // Turnstileトークンの検証
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Invalid Turnstile token' },
        { status: 400 }
      );
    }

    // メール送信
    const emailResponse = await resend.emails.send({
      from: process.env.MAIL_FROM || 'no-reply@yourdomain.com',
      to: process.env.MAIL_TO || 'recipient@example.com',
      subject: `新しいお問い合わせ: ${name}様より`,
      text: `
名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}
      `,
      reply_to: email,
    });

    return NextResponse.json(
      { message: 'メッセージを送信しました', id: emailResponse.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'メッセージの送信に失敗しました' },
      { status: 500 }
    );
  }
}