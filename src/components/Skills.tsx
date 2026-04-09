import AnimateIn from "./AnimateIn";

const skillGroups = [
  {
    category: "Development",
    items: ["JavaScript", "Java", "HTML / CSS", "Web Development", "React / Next.js"],
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "User-Centred Design"],
  },
  {
    category: "Consulting",
    items: ["IT Strategy", "SDLC Management", "Requirement Gathering", "Process Design", "Stakeholder Communication"],
  },
  {
    category: "Tools",
    items: ["Microsoft 365", "Word & Excel", "PowerPoint", "Teams", "Figma"],
  },
];

const allTech = [
  "JavaScript",
  "Java",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Figma",
  "Microsoft 365",
  "Git",
  "SQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </span>
      </AnimateIn>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
          marginBottom: "48px",
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
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
    </section>
  );
}
