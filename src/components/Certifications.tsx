import AnimateIn from "./AnimateIn";

const certifications = [
  {
    name: "Mendix Rapid Developer Certification",
    issuer: "Mendix",
    issued: "Jan 2024",
    credentialId: "86092",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto px-6 py-16 md:py-24 border-t border-white/[0.06]"
      style={{ maxWidth: "1100px" }}
    >
      <AnimateIn>
        <span className="label-badge mb-6 md:mb-12">
          Certifications
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
          Credentials &amp; certifications.
        </h2>
      </AnimateIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "520px" }}>
        {certifications.map((cert, i) => (
          <AnimateIn key={cert.credentialId} delay={i * 80 + 120}>
            <div className="card" style={{ overflow: "hidden" }}>
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
                    marginBottom: "8px",
                  }}
                >
                  {cert.issuer}
                </p>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#ededed",
                    marginBottom: "4px",
                  }}
                >
                  {cert.name}
                </h3>
                <p style={{ fontSize: "13px", color: "#888888" }}>
                  Issued {cert.issued}
                </p>
              </div>
              <div style={{ padding: "16px 24px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "11px",
                    color: "#333333",
                    letterSpacing: "0.05em",
                  }}
                >
                  Credential ID: {cert.credentialId}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
