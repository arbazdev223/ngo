import type { LeadFormPayload, LeadIntent, LeadSubmissionResult } from "@/content/config";
import { leadAdapter } from "@/lib/lead-adapter";
import { isValidPhone, normalizePhone, trimText } from "@/lib/utils";

export const runtime = "nodejs";

const validIntents: LeadIntent[] = ["volunteer", "donation", "general"];

function badRequest(message: string, status = 400) {
  const payload: LeadSubmissionResult = {
    ok: false,
    message,
  };

  return Response.json(payload, { status });
}

function methodNotAllowed() {
  return Response.json(
    {
      ok: false,
      message: "Method not allowed.",
    } satisfies LeadSubmissionResult,
    { status: 405 },
  );
}

function serverError(message: string) {
  return Response.json(
    {
      ok: false,
      message,
    } satisfies LeadSubmissionResult,
    { status: 500 },
  );
}

export async function GET() {
  return methodNotAllowed();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return badRequest("We could not read the form submission. Please try again.");
  }

  const honeypot = trimText(body.organization);

  if (honeypot) {
    return Response.json({
      ok: true,
      message: "Thank you. Your response has been noted.",
    } satisfies LeadSubmissionResult);
  }

  const intent = trimText(body.intent) as LeadIntent;
  const payload: LeadFormPayload = {
    intent,
    name: trimText(body.name),
    phone: normalizePhone(trimText(body.phone)),
    city: trimText(body.city),
    interest: trimText(body.interest),
    email: trimText(body.email) || undefined,
    message: trimText(body.message) || undefined,
    sourcePage: trimText(body.sourcePage) || undefined,
  };

  if (!validIntents.includes(payload.intent)) {
    return badRequest("Please choose a valid form type.");
  }

  if (!payload.name) {
    return badRequest("Name is required.");
  }

  if (!isValidPhone(payload.phone)) {
    return badRequest("Please enter a valid phone number.");
  }

  if (!payload.city) {
    return badRequest("City is required.");
  }

  if (!payload.interest) {
    return badRequest("Please tell us your area of interest.");
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return badRequest("Please enter a valid email address.");
  }

  try {
    const result = await leadAdapter.submitLead(payload);
    return Response.json(result);
  } catch (error) {
    console.error("[api/leads] submission failed", error);
    return serverError(
      "The submission could not be completed right now. Please try again later.",
    );
  }
}
