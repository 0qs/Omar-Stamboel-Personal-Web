"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      {/* Bar */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "13px",
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "0.04em",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Omar Stamboel
        </a>

        {/* Desktop nav links — hidden on mobile via CSS */}
        <ul className="hidden md:flex" style={{ gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "14px",
                  color: "#888888",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ededed")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888888")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile via CSS */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "10px" }}>
          <a
            href="https://www.linkedin.com/in/omar-stamboel-a46332330/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "13px", padding: "7px 14px", borderRadius: "8px", gap: "6px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:omarmaliq27@gmail.com"
            className="btn-primary"
            style={{ fontSize: "13px", padding: "7px 14px", borderRadius: "8px" }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile text toggle — hidden on desktop via CSS */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
            touchAction: "manipulation",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: menuOpen ? "#ededed" : "#888888",
            transition: "color 0.2s ease",
          }}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile dropdown — hidden on desktop via CSS */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "320px" : "0",
          transition: "max-height 0.3s ease",
          background: "rgba(0,0,0,0.96)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{ padding: "8px 24px 24px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "16px",
                color: "#888888",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:omarmaliq27@gmail.com"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              marginTop: "16px",
              padding: "10px 20px",
              background: "#ffffff",
              color: "#000000",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
