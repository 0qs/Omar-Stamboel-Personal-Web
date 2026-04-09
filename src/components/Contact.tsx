"use client";

import AnimateIn from "./AnimateIn";

const contactDetails = [
  {
    label: "Email",
    value: "omarmaliq27@gmail.com",
    href: "mailto:omarmaliq27@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "+62 859 2536 9800",
    href: "tel:+6285925369800",
    external: false,
  },
  {
    label: "Location",
    value: "Jakarta Selatan, Indonesia",
    href: null,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omar-stamboel-a46332330",
    href: "https://www.linkedin.com/in/omar-stamboel-a46332330/",
    external: true,
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "96px 24px 80px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <AnimateIn>
        <span
          className="label-badge"
          style={{ marginBottom: "48px", display: "inline-flex" }}
        >
          Contact
        </span>
      </AnimateIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          marginTop: "12px",
        }}
      >
        {/* Left: CTA */}
        <div>
          <AnimateIn delay={80}>
            <h2
              className="gradient-text"
              style={{
                fontSize: "clamp(32px, 4.5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Let&apos;s work
              <br />
              together.
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p
              style={{
                color: "#888888",
                lineHeight: 1.75,
                fontSize: "15px",
                marginBottom: "32px",
                maxWidth: "380px",
              }}
            >
              I&apos;m open to internship opportunities, freelance design
              projects, and collaborative work in UI/UX design or IT consulting.
              Don&apos;t hesitate to reach out.
            </p>
            <a
              href="mailto:omarmaliq27@gmail.com"
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              Send a Message
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </AnimateIn>
        </div>

        {/* Right: contact card */}
        <AnimateIn delay={120}>
          <div className="card" style={{ overflow: "hidden" }}>
            {contactDetails.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 24px",
                  borderBottom:
                    i < contactDetails.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "11px",
                    color: "#444444",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "13px",
                      color: "#888888",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      textAlign: "right",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#3291ff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#888888")
                    }
                  >
                    {item.value} {item.external && "↗"}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "13px",
                      color: "#888888",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Footer bottom */}
      <AnimateIn delay={300}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "80px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "12px",
              color: "#333333",
            }}
          >
            © 2025 Omar Stamboel · All rights reserved
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "12px",
              color: "#222222",
            }}
          >
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </AnimateIn>
    </footer>
  );
}
