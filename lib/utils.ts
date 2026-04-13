export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function isValidPhone(phone: string) {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 13;
}

export function trimText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}
