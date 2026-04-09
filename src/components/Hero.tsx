"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="mx-auto px-6 pt-28 pb-20 md:pt-[120px] md:pb-20 flex flex-col justify-center min-h-screen relative overflow-hidden"
      style={{ maxWidth: "1100px" }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(0,112,243,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Status badge */}
        <div
          className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
            }`}
          style={{ marginBottom: "32px" }}
        >
          <span className="label-badge">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00b14f",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(0,177,79,0.8)",
              }}
            />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h1
            className="gradient-text"
            style={{
              fontSize: "clamp(56px, 11vw, 160px)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Omar
            <br />
            Stamboel.
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`transition-all duration-700 ease-out ${mounted ? "opacity-100" : "opacity-0"
            }`}
          style={{
            transitionDelay: "300ms",
            margin: "40px 0",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* Subtitle */}
        <div
          className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            transitionDelay: "400ms",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(18px, 2.2vw, 28px)",
              fontWeight: 400,
              color: "#888888",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Technology Consultant ·{" "}
            <span style={{ color: "#ededed" }}>
              Information Systems, BINUS University
            </span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "13px",
              color: "#444444",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            Jakarta Selatan, Indonesia
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            transitionDelay: "550ms",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a href="#work" className="btn-primary">
            View Work
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
          <a
            href="/Omar_Stamboel_CV_2026.pdf"
            download="Omar_Stamboel_CV_2026.pdf"
            className="btn-secondary"
          >
            Download CV
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M8 3v8M4 8l4 4 4-4M3 13h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`transition-all duration-700 ease-out ${mounted ? "opacity-100" : "opacity-0"
          }`}
        style={{
          transitionDelay: "800ms",
          position: "absolute",
          bottom: "40px",
          left: "24px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "11px",
            color: "#444444",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
