import AnimateIn from "./AnimateIn";
import { prisma } from "@/lib/prisma";

const SKILL_CATEGORIES = ["Development", "Design", "Consulting", "Tools"];

export default async function Skills() {
  const skills = await prisma.skill.findMany({ orderBy: [{ category: "asc" }, { order: "asc" }] });

  const skillGroups = SKILL_CATEGORIES.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat).map((s) => s.name),
  }));

  const allTech = skills.filter((s) => s.category === "Technology").map((s) => s.name);

  return (
    <section
      id="skills"
      className="mx-auto px-6 py-16 md:py-24 border-t border-white/[0.06]"
      style={{ maxWidth: "1100px" }}
    >
      <AnimateIn>
        <span className="label-badge mb-6 md:mb-12">
          Skills
        </span>
      </AnimateIn>

      <div
        className="mb-6 md:mb-12"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
          flexWrap: "wrap",
          marginTop: "12px",
        }}
      >
        <AnimateIn delay={80}>
          <h2
            className="gradient-text"
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Capabilities &amp; tools.
          </h2>
        </AnimateIn>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {skillGroups.map((group, i) => (
          <AnimateIn key={group.category} delay={i * 80 + 80}>
            <div className="card" style={{ padding: "24px", height: "100%" }}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "11px",
                  color: "#0070f3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {group.category}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#888888",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Tech pills */}
      {allTech.length > 0 && (
        <AnimateIn delay={400}>
          <div
            className="card"
            style={{ padding: "20px 24px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "11px",
                color: "#444444",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Technologies
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {allTech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      )}
    </section>
  );
}
