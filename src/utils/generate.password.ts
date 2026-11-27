import { randomInt } from "node:crypto";

const UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const LOWER = "abcdefghijkmnopqrstuvwxyz";
const DIGITS = "23456789";
const SYMBOLS = "!@#$%&*";
const ALL = UPPER + LOWER + DIGITS + SYMBOLS;

function pick(chars: string): string {
  return chars[randomInt(0, chars.length)]!;
}

export function generatePassword(length = 10): string {
  const size = Math.max(length, 4);
  const chars = [pick(UPPER), pick(LOWER), pick(DIGITS), pick(SYMBOLS)];

  for (let i = chars.length; i < size; i++) {
    chars.push(pick(ALL));
  }

  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [chars[i], chars[j]] = [chars[j]!, chars[i]!];
  }

  return chars.join("");
}
