'use server';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import EmailTemplate from '../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const subject = formData.get('subject');
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['staystrongbg@gmail.com'],
      subject: subject as string,
      react: EmailTemplate({
        firstName: name as string,
        text: message as string,
        email: email as string,
      }) as React.ReactElement,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
