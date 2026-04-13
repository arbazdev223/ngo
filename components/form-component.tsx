"use client";

import { useMemo, useState } from "react";

import type { LeadIntent, LeadSubmissionResult } from "@/content/config";
import { cn, isValidPhone } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormComponentProps {
  intent: LeadIntent;
  title: string;
  description: string;
  sourcePage: string;
  submitLabel: string;
  interestLabel: string;
  interestPlaceholder: string;
  interestSuggestions: string[];
  className?: string;
}

interface FormValues {
  name: string;
  phone: string;
  city: string;
  interest: string;
  email: string;
  message: string;
  organization: string;
}

const emptyValues: FormValues = {
  name: "",
  phone: "",
  city: "",
  interest: "",
  email: "",
  message: "",
  organization: "",
};

export function FormComponent({
  intent,
  title,
  description,
  sourcePage,
  submitLabel,
  interestLabel,
  interestPlaceholder,
  interestSuggestions,
  className,
}: FormComponentProps) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState<string | undefined>();
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {},
  );


  const helperText = useMemo(() => {
    if (intent === "donation") {
      return "Tell us how you would like to support the work and we will follow up with the next manual step.";
    }

    if (intent === "volunteer") {
      return "Share what kind of contribution feels realistic for you right now.";
    }

    return "Use this form for general questions, coordination, or partnership conversations.";
  }, [intent]);

  const setField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please share your name.";
    }
    if (!isValidPhone(values.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!values.city.trim()) {
      nextErrors.city = "Please add your city.";
    }
    if (!values.interest.trim()) {
      nextErrors.interest = "Please tell us your area of interest.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      setMessage("Please review the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent,
          name: values.name,
          phone: values.phone,
          city: values.city,
          interest: values.interest,
          email: values.email || undefined,
          message: values.message || undefined,
          sourcePage,
          organization: values.organization,
        }),
      });

      const result = (await response.json()) as LeadSubmissionResult;

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message);
      setReferenceId(result.referenceId);
      setValues(emptyValues);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("The submission could not be completed right now. Please try again.");
    }
  };

  return (
    <div
      className={cn(
        "rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_26px_70px_rgba(56,39,27,0.08)] sm:p-7",
        className,
      )}
    >
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
          {title}
        </p>
        <h3 className="font-display mt-4 text-3xl text-foreground">{description}</h3>
        <p className="mt-4 text-sm leading-7 text-foreground/68">{helperText}</p>
      </div>

      {status === "success" ? (
        <div className="mt-6 rounded-[1.75rem] border border-[#c68b6f] bg-[#fff4ed] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Submission received
          </p>
          <p className="mt-3 text-base leading-8 text-foreground/80">{message}</p>
          {referenceId ? (
            <p className="mt-3 text-sm font-semibold text-foreground">
              Reference ID: <span className="text-accent">{referenceId}</span>
            </p>
          ) : null}
          <button
            className="mt-5 rounded-full border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            onClick={() => {
              setStatus("idle");
              setMessage("");
              setReferenceId(undefined);
            }}
            type="button"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form className="mt-6 space-y-5" noValidate onSubmit={onSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">Name</span>
              <input
                className={cn(
                  "w-full rounded-2xl border bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent",
                  errors.name ? "border-red-400" : "border-line",
                )}
                name="name"
                onChange={(event) => setField("name", event.target.value)}
                placeholder="Your full name"
                type="text"
                value={values.name}
              />
              {errors.name ? <span className="text-sm text-red-500">{errors.name}</span> : null}
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">Phone</span>
              <input
                className={cn(
                  "w-full rounded-2xl border bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent",
                  errors.phone ? "border-red-400" : "border-line",
                )}
                inputMode="tel"
                name="phone"
                onChange={(event) => setField("phone", event.target.value)}
                placeholder="10-digit phone number"
                type="tel"
                value={values.phone}
              />
              {errors.phone ? (
                <span className="text-sm text-red-500">{errors.phone}</span>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">City</span>
              <input
                className={cn(
                  "w-full rounded-2xl border bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent",
                  errors.city ? "border-red-400" : "border-line",
                )}
                name="city"
                onChange={(event) => setField("city", event.target.value)}
                placeholder="City or locality"
                type="text"
                value={values.city}
              />
              {errors.city ? <span className="text-sm text-red-500">{errors.city}</span> : null}
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">Email (optional)</span>
              <input
                className={cn(
                  "w-full rounded-2xl border bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent",
                  errors.email ? "border-red-400" : "border-line",
                )}
                name="email"
                onChange={(event) => setField("email", event.target.value)}
                placeholder="name@example.com"
                type="email"
                value={values.email}
              />
              {errors.email ? (
                <span className="text-sm text-red-500">{errors.email}</span>
              ) : null}
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-foreground">{interestLabel}</span>
            <input
              className={cn(
                "w-full rounded-2xl border bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent",
                errors.interest ? "border-red-400" : "border-line",
              )}
              name="interest"
              onChange={(event) => setField("interest", event.target.value)}
              placeholder={interestPlaceholder}
              type="text"
              value={values.interest}
            />
            <div className="flex flex-wrap gap-2">
              {interestSuggestions.map((suggestion) => (
                <button
                  className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-foreground/72 transition hover:border-accent hover:text-accent"
                  key={suggestion}
                  onClick={() => setField("interest", suggestion)}
                  type="button"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            {errors.interest ? (
              <span className="text-sm text-red-500">{errors.interest}</span>
            ) : null}
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-foreground">Message (optional)</span>
            <textarea
              className="min-h-32 w-full rounded-[1.5rem] border border-line bg-[#fffaf4] px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
              name="message"
              onChange={(event) => setField("message", event.target.value)}
              placeholder="Anything else you want our team to know?"
              value={values.message}
            />
          </label>

          <label className="sr-only">
            Organization
            <input
              autoComplete="off"
              name="organization"
              onChange={(event) => setField("organization", event.target.value)}
              tabIndex={-1}
              type="text"
              value={values.organization}
            />
          </label>

          {message ? (
            <div
              className={cn(
                "rounded-[1.25rem] px-4 py-3 text-sm",
                status === "error"
                  ? "border border-red-200 bg-red-50 text-red-700"
                  : "border border-[#d2b79b] bg-[#fbf3ea] text-foreground/78",
              )}
            >
              {message}
            </div>
          ) : null}

          <button
            className="inline-flex min-w-44 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Submitting..." : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
