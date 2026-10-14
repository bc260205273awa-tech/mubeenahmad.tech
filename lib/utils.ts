export function cn(...inputs: (string | boolean | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}
