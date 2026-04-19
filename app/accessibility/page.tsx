"use client";

import { useEffect, useState } from "react";

export default function AccessibilityPage() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Load saved settings on mount
  useEffect(() => {
    const lt = localStorage.getItem("largeText") === "true";
    const hc = localStorage.getItem("highContrast") === "true";
    setLargeText(lt);
    setHighContrast(hc);
    if (lt) document.documentElement.classList.add("large-text");
    if (hc) document.documentElement.classList.add("high-contrast");
  }, []);

  function toggleLargeText() {
    const next = !largeText;
    setLargeText(next);
    localStorage.setItem("largeText", String(next));
    document.documentElement.classList.toggle("large-text", next);
  }

  function toggleHighContrast() {
    const next = !highContrast;
    setHighContrast(next);
    localStorage.setItem("highContrast", String(next));
    document.documentElement.classList.toggle("high-contrast", next);
  }

  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{
        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
        fontWeight: 700,
        color: "var(--navy)",
        marginBottom: "0.5rem",
        letterSpacing: "-0.02em",
      }}>
        Accessibility
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
        Adjust display settings to suit your needs. Changes apply across the whole app and are saved automatically.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleCard
          icon="🔤"
          title="Large Text"
          desc="Increases the base font size across the app."
          enabled={largeText}
          onToggle={toggleLargeText}
        />
        <ToggleCard
          icon="🌗"
          title="High Contrast"
          desc="Increases colour contrast for better readability."
          enabled={highContrast}
          onToggle={toggleHighContrast}
        />
      </div>
    </div>
  );
}

function ToggleCard({
  icon, title, desc, enabled, onToggle,
}: {
  icon: string;
  title: string;
  desc: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{
      background: "var(--surface)",
      border: `1px solid ${enabled ? "var(--navy)" : "var(--border)"}`,
      borderRadius: "12px",
      padding: "1.25rem 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "1.75rem" }}>{icon}</span>
        <div>
          <p style={{ margin: 0, fontWeight: 600, color: "var(--navy)", fontSize: "1rem" }}>{title}</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.2rem" }}>{desc}</p>
        </div>
      </div>

      {/* Toggle switch */}
      <button
        onClick={onToggle}
        aria-pressed={enabled}
        aria-label={`Toggle ${title}`}
        style={{
          width: "52px",
          height: "28px",
          borderRadius: "999px",
          border: "none",
          background: enabled ? "var(--navy)" : "#d1d5db",
          cursor: "pointer",
          position: "relative",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
      >
        <span style={{
          position: "absolute",
          top: "3px",
          left: enabled ? "27px" : "3px",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }} />
      </button>
    </div>
  );
}
