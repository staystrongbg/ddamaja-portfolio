"use server";
// import { revalidatePath } from 'next/cache';
import EmailTemplate from "../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const subject = formData.get("user_subject");
  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const message = formData.get("user_message");

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["staystrongbg@gmail.com"],
      subject: subject as string,
      react: EmailTemplate({
        firstName: name as string,
        text: message as string,
        email: email as string,
      }) as React.ReactElement,
    });

    console.log("Email sent successfully");
  } catch (error: any) {
    console.log("Error sending email", error);
  }
}
