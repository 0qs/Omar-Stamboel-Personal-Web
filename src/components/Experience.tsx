import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { prisma } from "@/lib/prisma";

export default async function Experience() {
  const experiences = await prisma.experience.findMany({ orderBy: { order: "asc" } });

  return (
    <section
      id="work"
      className="mx-auto px-6 py-16 md:py-24 border-t border-white/[0.06]"
      style={{ maxWidth: "1100px" }}
    >
      <AnimateIn>
        <span className="label-badge mb-6 md:mb-12">
          Work Experience
        </span>
      </AnimateIn>

      <AnimateIn delay={80}>
        <h2
          className="gradient-text mb-6 md:mb-12"
          style={{
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginTop: "12px",
          }}
        >
          Where I&apos;ve worked.
        </h2>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, i) => {
          const points = JSON.parse(exp.points) as string[];
          const tags = JSON.parse(exp.tags) as string[];
          return (
            <AnimateIn key={exp.id} delay={i * 120 + 80}>
              <div
                className="card"
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* Header */}
                <div
                  style={{
                    padding: "24px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    {/* Company logo */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.1)",
                        flexShrink: 0,
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px",
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#ededed",
                          marginBottom: "2px",
                        }}
                      >
                        {exp.company}
                      </p>
                      <p style={{ fontSize: "13px", color: "#888888" }}>
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {exp.status === "current" && (
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#00b14f",
                            display: "inline-block",
                            boxShadow: "0 0 6px rgba(0,177,79,0.6)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "12px",
                          color: exp.status === "current" ? "#00b14f" : "#444444",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "11px",
                        color: "#333333",
                      }}
                    >
                      · {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <div style={{ padding: "24px", flex: 1 }}>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {points.map((point, pi) => (
                      <li
                        key={pi}
                        style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
                      >
                        <span
                          style={{
                            color: "#0070f3",
                            fontSize: "14px",
                            lineHeight: "22px",
                            flexShrink: 0,
                          }}
                        >
                          ↳
                        </span>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#888888",
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div
                  style={{
                    padding: "16px 24px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
