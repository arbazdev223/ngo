import type { LeadFormPayload, LeadSubmissionResult } from "@/content/config";

export interface LeadAdapter {
  submitLead(payload: LeadFormPayload): Promise<LeadSubmissionResult>;
}

function createReferenceId() {
  const stamp = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const random = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `SKS-${stamp}-${random}`;
}

const consoleLeadAdapter: LeadAdapter = {
  async submitLead(payload) {
    const referenceId = createReferenceId();

    console.info(
      "[lead-adapter] received lead\n",
      JSON.stringify(
        {
          referenceId,
          receivedAt: new Date().toISOString(),
          payload,
        },
        null,
        2,
      ),
    );

    return {
      ok: true,
      message:
        "Thank you for reaching out. Our team will review your submission and follow up soon.",
      referenceId,
    };
  },
};

export const leadAdapter = consoleLeadAdapter;
