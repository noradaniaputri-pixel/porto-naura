import { profile } from "../data/profile";

export interface MessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

/**
 * Sends the contact form.
 * - With VITE_FORMSPREE_ID set: posts to Formspree and resolves "sent".
 * - Without it: opens the visitor's email app with the message pre-filled ("mailto").
 *
 * To use EmailJS instead, install @emailjs/browser and replace the body of this function.
 */
export async function sendMessage(data: MessagePayload): Promise<"sent" | "mailto"> {
  if (!FORMSPREE_ID) {
    const body = `${data.message}\n\n— ${data.name} (${data.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      data.subject,
    )}&body=${encodeURIComponent(body)}`;
    return "mailto";
  }

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Request failed");
  return "sent";
}
