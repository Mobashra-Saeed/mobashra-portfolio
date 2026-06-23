"use server";

import { Resend } from "resend";
import { site } from "@/lib/data/site";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(prevState, formData) {
  // Honeypot — bots fill this hidden field; silently "succeed".
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!emailRe.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "error", message: "Email isn't configured yet. Please email me directly." };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL || site.email;

    const { error } = await resend.emails.send({
      // In production, swap this for an address on your verified domain.
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return { status: "error", message: "Something went wrong sending your message." };
    }
    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch {
    return { status: "error", message: "Something went wrong. Please email me directly." };
  }
}
