import AnimateIn from "./AnimateIn";

export type StatData = { id: number; value: string; label: string };

export default function About({
  focusAreas,
  stats,
}: {
  focusAreas: string[];
  stats: StatData[];
}) {
  return (
    <section
      id="about"
      className="mx-auto px-6 py-16 md:py-24 border-t border-white/[0.06]"
      style={{ maxWidth: "1100px" }}
    >
      <AnimateIn>
        <span className="label-badge mb-6 md:mb-12">
          About
        </span>
      </AnimateIn>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-3 items-start"
      >
        {/* Left: bio */}
        <div>
          <AnimateIn delay={80}>
            <h2
              className="gradient-text"
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              Building systems at the intersection of finance &amp; technology.
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p
              style={{
                color: "#888888",
                lineHeight: 1.75,
                fontSize: "15px",
                marginBottom: "16px",
              }}
            >
              Undergraduate Information Systems student at BINUS University with
              a strong focus on banking and technology consulting. Experienced in
              supporting large-scale digital transformation projects for major
              financial institutions, particularly within IT operations and
              internal banking systems.
            </p>
            <p style={{ color: "#888888", lineHeight: 1.75, fontSize: "15px" }}>
              Skilled at translating complex business and user needs into clear
              system workflows, functional requirements, and practical
              recommendations that drive effective decision-making.
            </p>
          </AnimateIn>
        </div>

        {/* Right: education + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <AnimateIn delay={120}>
            {/* Education card */}
            <div
              className="card"
              style={{ overflow: "hidden", marginBottom: "0" }}
            >
              <div
                style={{
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
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
                  Education
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#ededed",
                        marginBottom: "4px",
                      }}
                    >
                      BINUS University
                    </h3>
                    <p style={{ fontSize: "13px", color: "#888888" }}>
                      B.Sc. Information Systems
                    </p>
                    <p style={{ fontSize: "12px", color: "#555555", marginTop: "2px" }}>
                      Minor: Digital Technology
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "11px",
                      color: "#444444",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    2022 – 2026
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#ededed",
                        marginBottom: "4px",
                      }}
                    >
                      SMAS Pangudi Luhur
                    </h3>
                    <p style={{ fontSize: "13px", color: "#888888" }}>
                      High School · Social Studies
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "11px",
                      color: "#444444",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    2019 – 2022
                  </span>
                </div>
              </div>

              {/* Focus areas */}
              {focusAreas.length > 0 && (
                <div style={{ padding: "20px 24px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "11px",
                      color: "#444444",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Focus Areas
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {focusAreas.map((area) => (
                      <span key={area} className="tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimateIn>

          {/* Stats */}
          {stats.length > 0 && (
            <AnimateIn delay={200}>
              <div
                className="card"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
                  overflow: "hidden",
                }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.id}
                    className="px-2 sm:px-4 py-5 text-center"
                    style={{
                      borderLeft:
                        i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#0070f3",
                        marginBottom: "4px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#444444",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          )}
        </div>
      </div>
    </section>
  );
}
