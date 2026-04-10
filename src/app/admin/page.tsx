import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const [expCount, skillCount, statCount] = await Promise.all([
    prisma.experience.count(),
    prisma.skill.count(),
    prisma.stat.count(),
  ]);

  return (
    <div>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#ededed",
          letterSpacing: "-0.02em",
          marginBottom: "8px",
        }}
      >
        Dashboard
      </h1>
      <p style={{ fontSize: "14px", color: "#555555", marginBottom: "32px" }}>
        Manage your portfolio content.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px" }}>
        <StatCard label="Experiences" count={expCount} href="/admin/experiences" />
        <StatCard label="Skills" count={skillCount} href="/admin/skills" />
        <StatCard label="Stats" count={statCount} href="/admin/skills" />
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link
          href="/admin/experiences"
          style={{
            padding: "8px 16px",
            background: "#0070f3",
            borderRadius: "8px",
            fontSize: "13px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Manage Experiences
        </Link>
        <Link
          href="/admin/skills"
          style={{
            padding: "8px 16px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontSize: "13px",
            color: "#ededed",
            textDecoration: "none",
          }}
        >
          Manage Skills
        </Link>
        <Link
          href="/"
          target="_blank"
          style={{
            padding: "8px 16px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontSize: "13px",
            color: "#888888",
            textDecoration: "none",
          }}
        >
          View Portfolio ↗
        </Link>
      </div>
    </div>
  );
}

function StatCard({
  label,
  count,
  href,
}: {
  label: string;
  count: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "24px",
        textDecoration: "none",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "28px",
          fontWeight: 700,
          color: "#0070f3",
          marginBottom: "4px",
        }}
      >
        {count}
      </p>
      <p style={{ fontSize: "13px", color: "#555555" }}>{label}</p>
    </Link>
  );
}
