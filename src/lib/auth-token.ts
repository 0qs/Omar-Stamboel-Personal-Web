import { createHash } from "crypto";

export function buildToken(username: string, password: string): string {
  return createHash("sha256")
    .update(`cms-session:${username}:${password}`)
    .digest("hex");
}

export function expectedToken(): string | null {
  const u = process.env.ADMIN_USERNAME;
  const p = process.env.ADMIN_PASSWORD;
  if (!u || !p) return null;
  return buildToken(u, p);
}
