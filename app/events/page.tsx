const events = [
  {
    id: 1,
    category: "Social",
    title: "Freshers' Welcome Night",
    date: "Fri 25 Apr 2026",
    time: "7:00 PM",
    location: "Student Union, Main Hall",
    desc: "Kick off the semester with live music, free food and a chance to meet fellow students.",
  },
  {
    id: 2,
    category: "Academic",
    title: "Guest Lecture: AI & Society",
    date: "Mon 28 Apr 2026",
    time: "2:00 PM",
    location: "Lecture Theatre B, Block 3",
    desc: "Prof. Sarah O'Brien discusses the ethical implications of AI in everyday life.",
  },
  {
    id: 3,
    category: "Sports",
    title: "5-a-side Football Tournament",
    date: "Sat 3 May 2026",
    time: "10:00 AM",
    location: "Sports Complex, Pitch 2",
    desc: "Register your team and compete for the Campus Cup. All skill levels welcome.",
  },
  {
    id: 4,
    category: "Workshop",
    title: "CV & Interview Skills",
    date: "Wed 7 May 2026",
    time: "1:00 PM",
    location: "Careers Centre, Room 104",
    desc: "Practical workshop covering CV writing, LinkedIn and how to ace graduate interviews.",
  },
  {
    id: 5,
    category: "Culture",
    title: "International Food Festival",
    date: "Thu 8 May 2026",
    time: "12:00 PM",
    location: "Campus Courtyard",
    desc: "Student societies from 20+ countries share food, music and culture. Free entry.",
  },
  {
    id: 6,
    category: "Academic",
    title: "Study Skills Bootcamp",
    date: "Mon 12 May 2026",
    time: "10:00 AM",
    location: "Library, Floor 2",
    desc: "A half-day session on note-taking, time management and exam preparation techniques.",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Social:    { bg: "#fef3c7", text: "#92400e" },
  Academic:  { bg: "#dbeafe", text: "#1e40af" },
  Sports:    { bg: "#dcfce7", text: "#166534" },
  Workshop:  { bg: "#f3e8ff", text: "#6b21a8" },
  Culture:   { bg: "#ffe4e6", text: "#9f1239" },
};

export default function EventsPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}>
          Campus Events
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1rem", margin: 0 }}>
          What's on across campus this semester.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.25rem",
      }}>
        {events.map(event => {
          const color = categoryColors[event.category] ?? { bg: "#f3f4f6", text: "#374151" };
          return (
            <div key={event.id} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Card top accent */}
              <div style={{ height: "4px", background: "var(--navy)" }} />

              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* Category badge */}
                <span style={{
                  display: "inline-block",
                  background: color.bg,
                  color: color.text,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  alignSelf: "flex-start",
                  letterSpacing: "0.03em",
                }}>
                  {event.category}
                </span>

                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--navy)",
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {event.title}
                </h3>

                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.55,
                  flex: 1,
                }}>
                  {event.desc}
                </p>

                {/* Meta */}
                <div style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "0.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    📅 {event.date} · {event.time}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    📍 {event.location}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
