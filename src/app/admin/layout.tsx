import Link from "next/link";
import { logout } from "@/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", fontFamily: "var(--font-geist-sans)" }}>
      <aside style={{ width: "220px", flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.06)", padding: "24px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
        <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "10px", color: "#444444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", paddingLeft: "12px" }}>Portfolio CMS</p>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/experiences">Experiences</NavLink>
        <NavLink href="/admin/skills">Skills &amp; Focus Areas</NavLink>
        <div style={{ flex: 1 }} />
        <form action={logout}>
          <button type="submit" style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", color: "#555555", cursor: "pointer" }}>Sign out</button>
        </form>
      </aside>
      <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>{children}</main>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ display: "block", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", color: "#888888", textDecoration: "none" }}>
      {children}
    </Link>
  );
}
