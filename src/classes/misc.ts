export function normalizeDate(input: number | Date | string | null | undefined): Date {
  if (!input) return new Date(0); // fail-safe
  if (typeof input === 'number') return new Date(input * 1000);
  if (typeof input === 'string') return new Date(input);
  return input;
}