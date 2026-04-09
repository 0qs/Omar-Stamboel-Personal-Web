import Image from "next/image";
import AnimateIn from "./AnimateIn";

const experiences = [
  {
    company: "PwC Southeast Asia Consulting",
    abbr: "PwC",
    logo: "/PwCLogo.png",
    role: "FS Strategy and Operations Intern",
    period: "Jan 2025 – Dec 2025",
    status: "past",
    location: "Jakarta, Indonesia",
    points: [
      "Supported a digital transformation project for the payment operations division of a major Indonesian SOE bank, focusing on streamlining system workflows and dashboards.",
      "Managed the full SDLC of requirement gathering, from user interviews and defining functional specs to coordinating grooming, development, testing, and supporting deployment and piloting.",
      "Developed practical recommendations for the client based on user insights and feature analysis to guide decision-making throughout the project.",
      "Collaborated with cross-functional teams in a fast-paced professional services environment, demonstrating strong written and verbal communication in English and Bahasa Indonesia.",
    ],
    tags: ["IT Strategy", "Digital Transformation", "SDLC", "Banking", "Consulting"],
  },
  {
    company: "Westbike",
    abbr: "WB",
    logo: "/WestbikeLogo.jpeg",
    role: "UI/UX Designer Intern",
    period: "Jul 2023 – Dec 2023",
    status: "past",
    location: "Jakarta, Indonesia",
    points: [
      "Led requirement gathering for Westbike, translating user needs into clear product requirements for workflows and dashboards.",
      "Designed the UI and UX for Westbike including detailed wireframes for both mobile and desktop platforms, applying user-centred design principles.",
      "Produced data-driven design recommendations that informed product roadmap decisions, demonstrating analytical thinking and structured problem solving.",
    ],
    tags: ["UI/UX Design", "Figma", "Wireframing", "User Research", "Mobile"],
  },
];

export default function Experience() {
  return (
    <section
      id="work"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <AnimateIn>
        <span
          className="label-badge"
          style={{ marginBottom: "48px", display: "inline-flex" }}
        >
          Work Experience
        </span>
      </AnimateIn>

      <AnimateIn delay={80}>
        <h2
          className="gradient-text"
          style={{
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "48px",
            marginTop: "12px",
          }}
        >
          Where I&apos;ve worked.
        </h2>
      </AnimateIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "16px",
        }}
      >
        {experiences.map((exp, i) => (
          <AnimateIn key={exp.company} delay={i * 120 + 80}>
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
                  {exp.points.map((point, pi) => (
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
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
