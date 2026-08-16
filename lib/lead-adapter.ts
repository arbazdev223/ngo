import { Resend } from "resend";

import type { LeadFormPayload, LeadSubmissionResult } from "@/content/config";

export interface LeadAdapter {
  submitLead(payload: LeadFormPayload): Promise<LeadSubmissionResult>;
}

function createReferenceId() {
  const stamp = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const random = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `SKS-${stamp}-${random}`;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const recipientEmail = "shehrikamgarsamaj@gmail.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(payload: LeadFormPayload, referenceId: string) {
  const rows = [
    ["Reference ID", referenceId],
    ["Intent", payload.intent],
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["City", payload.city],
    ["Interest", payload.interest],
    ["Email", payload.email ?? "-"],
    ["Message", payload.message ?? "-"],
    ["Source Page", payload.sourcePage ?? "-"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;background:#f7efe6;padding:24px;color:#1e1813;">
      <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #ead9c7;border-radius:16px;padding:24px;">
        <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">New contact form submission</h1>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:10px 0;border-top:1px solid #ead9c7;width:180px;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
                    <td style="padding:10px 0;border-top:1px solid #ead9c7;">${escapeHtml(value)}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function buildEmailText(payload: LeadFormPayload, referenceId: string) {
  return [
    "New contact form submission",
    `Reference ID: ${referenceId}`,
    `Intent: ${payload.intent}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `City: ${payload.city}`,
    `Interest: ${payload.interest}`,
    `Email: ${payload.email ?? "-"}`,
    `Message: ${payload.message ?? "-"}`,
    `Source Page: ${payload.sourcePage ?? "-"}`,
  ].join("\n");
}

const consoleLeadAdapter: LeadAdapter = {
  async submitLead(payload) {
    const referenceId = createReferenceId();

    if (!resend) {
      throw new Error("RESEND_API_KEY is missing.");
    }

    await resend.emails.send({
      from: "Shehri Kamgar Samaj <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New ${payload.intent} inquiry from ${payload.name}`,
      text: buildEmailText(payload, referenceId),
      html: buildEmailHtml(payload, referenceId),
      replyTo: payload.email || undefined,
    });

    return {
      ok: true,
      message:
        "Thank you for reaching out. Your submission has been sent to our team, and we will follow up soon.",
      referenceId,
    };
  },
};

export const leadAdapter = consoleLeadAdapter;
