"use client";

import { useState } from "react";
import { campusEvents, EventFeatures } from "@/lib/events-data";

const FEATURE_LABELS: { key: keyof EventFeatures; label: string; emoji: string }[] = [
  { key: "academic", label: "Academic / Educational", emoji: "📚" },
  { key: "social",   label: "Social / Meeting people",  emoji: "🎉" },
  { key: "sports",   label: "Sports / Active",          emoji: "⚽" },
  { key: "indoor",   label: "Indoor",                   emoji: "🏛️" },
  { key: "evening",  label: "Evening event",            emoji: "🌙" },
];

// Cosine similarity between two feature vectors
function cosineSimilarity(a: EventFeatures, b: EventFeatures): number {
  const keys = Object.keys(a) as (keyof EventFeatures)[];
  const dot = keys.reduce((sum, k) => sum + a[k] * b[k], 0);
  const magA = Math.sqrt(keys.reduce((sum, k) => sum + a[k] ** 2, 0));
  const magB = Math.sqrt(keys.reduce((sum, k) => sum + b[k] ** 2, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

export default function MLRecommenderPage() {
  const [prefs, setPrefs] = useState<EventFeatures>({
    academic: 0,
    social: 0,
    sports: 0,
    indoor: 0,
    evening: 0,
  });
  const [results, setResults] = useState<{ title: string; date: string; location: string; score: number }[] | null>(null);

  function toggle(key: keyof EventFeatures) {
    setPrefs(prev => ({ ...prev, [key]: prev[key] === 1 ? 0 : 1 }));
    setResults(null);
  }

  function recommend() {
    const scored = campusEvents.map(event => ({
      title: event.title,
      date: event.date,
      location: event.location,
      score: cosineSimilarity(prefs, event.features),
    }));
    const top3 = scored.sort((a, b) => b.score - a.score).slice(0, 3);
    setResults(top3);
  }

  const noneSelected = Object.values(prefs).every(v => v === 0);

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <span style={{
          display: "inline-block",
          background: "var(--gold-light)",
          color: "#92400e",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
          marginBottom: "0.75rem",
        }}>
          ML Feature
        </span>
        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}>
          Event Recommender
        </h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
          Select what you're interested in and the recommender will find your best-matching events using <strong>cosine similarity</strong>.
        </p>
      </div>

      {/* Preferences */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "1.5rem",
      }}>
        <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "1rem", fontSize: "0.95rem" }}>
          What are you looking for?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FEATURE_LABELS.map(({ key, label, emoji }) => {
            const active = prefs[key] === 1;
            return (
              <label key={key} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                padding: "0.6rem 0.875rem",
                borderRadius: "8px",
                border: `1px solid ${active ? "var(--navy)" : "var(--border)"}`,
                background: active ? "#eef0f8" : "transparent",
                transition: "all 0.15s",
              }}>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(key)}
                  style={{ width: "16px", height: "16px", accentColor: "var(--navy)", cursor: "pointer" }}
                />
                <span style={{ fontSize: "1.1rem" }}>{emoji}</span>
                <span style={{ fontSize: "0.925rem", color: "var(--navy)", fontWeight: active ? 600 : 400 }}>
                  {label}
                </span>
              </label>
            );
          })}
        </div>

        <button
          onClick={recommend}
          disabled={noneSelected}
          style={{
            marginTop: "1.25rem",
            background: noneSelected ? "#d1d5db" : "var(--navy)",
            color: noneSelected ? "#9ca3af" : "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.75rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: noneSelected ? "not-allowed" : "pointer",
            width: "100%",
          }}
        >
          Find My Events →
        </button>
      </div>

      {/* Results */}
      {results && (
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy)", marginBottom: "1rem" }}>
            Top 3 Recommended Events
          </h2>
          {results[0].score === 0 ? (
            <p style={{ color: "var(--muted)" }}>No close matches found. Try selecting different preferences.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {results.map((r, i) => {
                const pct = Math.round(r.score * 100);
                return (
                  <div key={r.title} style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1.1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}>
                    <span style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: i === 0 ? "var(--gold)" : "var(--muted)",
                      minWidth: "2rem",
                      textAlign: "center",
                    }}>
                      #{i + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 600, color: "var(--navy)", fontSize: "0.95rem" }}>{r.title}</p>
                      <p style={{ margin: "0.2rem 0 0", fontSize: "0.8rem", color: "var(--muted)" }}>
                        📅 {r.date} · 📍 {r.location}
                      </p>
                    </div>
                    {/* Score bar */}
                    <div style={{ textAlign: "right", minWidth: "64px" }}>
                      <p style={{ margin: 0, fontWeight: 700, color: "var(--navy)", fontSize: "1rem" }}>{pct}%</p>
                      <div style={{ width: "64px", height: "6px", background: "var(--border)", borderRadius: "999px", marginTop: "4px" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: "var(--navy)", borderRadius: "999px" }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* How this recommendation works */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.75rem",
        marginBottom: "1.5rem",
      }}>
        <h2 style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
        }}>
          How this recommendation works
        </h2>

        {[
          {
            title: "Inputs / Features",
            body: "Each event in the dataset is described using 5 binary features like academic, social, sports, indoor and evening. 1 means yes and 0 means no. The user also picks their preference using the same 5 features. Both the user and each event are represented as vector.",
          },
          {
            title: "Model Used",
            body: "The system uses cosine similarity, a technique from content-based filtering. This measures the angle between the user's preference vector and each event vector. The smaller the angle between them, the more similar they will be. This is inspired by the k nearest neighbours instead of rules.",
          },
          {
            title: "Output",
            body: "The system scores every event against the users' preferences and gives us back the top 3 highest scoring matches. This is displayed with a percentage score and a visual bar. If a 100% score is present this means that the event perfectly matches every preference the user selected.",
          },
          {
            title: "Evaluation",
            body: "The recommender was tested manually. Selecting academic and indoor correctly retured three academic indoor events which were guest lecture, cv workshop and study skills bootcamp which all scored 100%. Selecting social and evening preferences returned different events like we expected. Results were logical and consistent.",
          },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: "1.1rem" }}>
            <p style={{ margin: "0 0 0.3rem", fontWeight: 600, color: "var(--navy)", fontSize: "0.925rem" }}>
              {title}
            </p>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div style={{
        background: "var(--gold-light)",
        border: "1px solid #fde68a",
        borderRadius: "12px",
        padding: "1.5rem",
      }}>
        <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
          🧠 How this works
        </p>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#78350f", fontSize: "0.875rem", lineHeight: 1.8 }}>
          <li><strong>Input:</strong> Your preferences become a 5-number vector e.g. [1, 0, 1, 0, 1]</li>
          <li><strong>Events:</strong> Each event also has a 5-number feature vector stored in the dataset</li>
          <li><strong>Algorithm:</strong> Cosine similarity measures the angle between two vectors — the smaller the angle, the better the match</li>
          <li><strong>Output:</strong> Events are ranked by similarity score (0–100%) and the top 3 are shown</li>
          <li><strong>Why not if/else:</strong> Cosine similarity weighs all features together — no single rule decides the result</li>
        </ul>
      </div>

    </div>
  );
}
