"use client";

import { useActionState } from "react";
import { login } from "@/actions/auth";

export default function LoginPage() {
  const [state, action, pending] = useActionState(
    async (_prev: { error?: string } | null, formData: FormData) => {
      const result = await login(formData);
      return result ?? null;
    },
    null
  );

  return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "380px" }}>
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "11px", color: "#444444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Admin</p>
          <h1 style={{ fontSize: "22px", fontWeight: 600, color: "#ededed", letterSpacing: "-0.02em" }}>Portfolio CMS</h1>
        </div>
        <form action={action} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "28px" }}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="username" style={{ display: "block", fontSize: "13px", color: "#888888", marginBottom: "8px", fontFamily: "var(--font-geist-mono)" }}>Username</label>
            <input id="username" name="username" type="text" required autoFocus autoComplete="username"
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 14px", fontSize: "14px", color: "#ededed", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="password" style={{ display: "block", fontSize: "13px", color: "#888888", marginBottom: "8px", fontFamily: "var(--font-geist-mono)" }}>Password</label>
            <input id="password" name="password" type="password" required autoComplete="current-password"
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 14px", fontSize: "14px", color: "#ededed", outline: "none", boxSizing: "border-box" }} />
          </div>
          {state?.error && <p style={{ fontSize: "13px", color: "#ff4444", marginBottom: "16px" }}>{state.error}</p>}
          <button type="submit" disabled={pending}
            style={{ width: "100%", background: "#0070f3", border: "none", borderRadius: "8px", padding: "10px 16px", fontSize: "14px", fontWeight: 500, color: "#ffffff", cursor: pending ? "not-allowed" : "pointer", opacity: pending ? 0.6 : 1 }}>
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
