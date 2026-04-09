import AnimateIn from "./AnimateIn";

export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="mx-auto px-6 py-16 md:py-24 border-t border-white/[0.06]"
      style={{ maxWidth: "1100px" }}
    >
      <AnimateIn>
        <span className="label-badge mb-6 md:mb-12">
          Community
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
          Beyond the desk.
        </h2>
      </AnimateIn>

      <AnimateIn delay={120}>
        <div className="card" style={{ overflow: "hidden", maxWidth: "520px" }}>
          <div
            style={{
              padding: "24px",
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
                marginBottom: "8px",
              }}
            >
              Community
            </p>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#ededed",
                marginBottom: "4px",
              }}
            >
              BINUS Cybersecurity Community
            </h3>
            <p style={{ fontSize: "13px", color: "#888888" }}>
              BINUS University
            </p>
          </div>
          <div style={{ padding: "24px" }}>
            <p
              style={{
                fontSize: "14px",
                color: "#888888",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Active member attending regular sessions on security frameworks,
              threat analysis, and secure system design.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Cybersecurity", "Threat Analysis", "Secure Design"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
