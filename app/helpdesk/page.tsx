"use client";

import { useState } from "react";

const categories = [
  "IT & Technical Support",
  "Accommodation",
  "Finance & Fees",
  "Academic Affairs",
  "Student Wellbeing",
  "Other",
];

type Errors = {
  title?: string;
  category?: string;
  description?: string;
};

export default function HelpdeskPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!title.trim()) e.title = "Please enter a title.";
    if (!category) e.category = "Please select a category.";
    if (description.trim().length < 10) e.description = "Please provide more detail (min 10 characters).";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setTitle("");
    setCategory("");
    setDescription("");
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "16px",
          padding: "3rem 2rem",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
          <h2 style={{ color: "var(--navy)", marginBottom: "0.5rem", fontSize: "1.5rem" }}>
            Request Submitted!
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
            Your helpdesk ticket has been received. A member of the team will be in touch within 2 working days.
          </p>
          <div style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "1.25rem",
            textAlign: "left",
            marginBottom: "2rem",
          }}>
            <p style={{ margin: "0 0 0.4rem", fontSize: "0.85rem", color: "var(--muted)" }}>Summary</p>
            <p style={{ margin: "0 0 0.25rem", fontWeight: 600, color: "var(--navy)" }}>{title}</p>
            <p style={{ margin: "0 0 0.25rem", fontSize: "0.875rem", color: "var(--muted)" }}>{category}</p>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted)" }}>{description}</p>
          </div>
          <button onClick={handleReset} style={{
            background: "var(--navy)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.75rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
          }}>
            Submit another request
          </button>
        </div>
      </div>
    );
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
        Helpdesk
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
        Fill in the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {/* Title */}
        <div>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => { setTitle(e.target.value); setErrors(prev => ({ ...prev, title: undefined })); }}
            placeholder="Brief summary of your issue"
            style={{ ...inputStyle, borderColor: errors.title ? "#ef4444" : "var(--border)" }}
          />
          {errors.title && <p style={errorStyle}>{errors.title}</p>}
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Category</label>
          <select
            value={category}
            onChange={e => { setCategory(e.target.value); setErrors(prev => ({ ...prev, category: undefined })); }}
            style={{ ...inputStyle, borderColor: errors.category ? "#ef4444" : "var(--border)", color: category ? "var(--text)" : "var(--muted)" }}
          >
            <option value="" disabled>Select a category</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.category && <p style={errorStyle}>{errors.category}</p>}
        </div>

        {/* Description */}
        <div>
          <label style={labelStyle}>Description</label>
          <textarea
            value={description}
            onChange={e => { setDescription(e.target.value); setErrors(prev => ({ ...prev, description: undefined })); }}
            placeholder="Describe your issue in detail..."
            rows={5}
            style={{ ...inputStyle, borderColor: errors.description ? "#ef4444" : "var(--border)", resize: "vertical" }}
          />
          {errors.description && <p style={errorStyle}>{errors.description}</p>}
        </div>

        <button type="submit" style={{
          background: "var(--navy)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.85rem 2rem",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          alignSelf: "flex-start",
        }}>
          Submit Request
        </button>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--navy)",
  marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 0.875rem",
  fontSize: "0.95rem",
  fontFamily: "'DM Sans', sans-serif",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  background: "var(--surface)",
  color: "var(--text)",
  outline: "none",
  boxSizing: "border-box",
};

const errorStyle: React.CSSProperties = {
  color: "#ef4444",
  fontSize: "0.8rem",
  marginTop: "0.35rem",
  margin: "0.35rem 0 0",
};
