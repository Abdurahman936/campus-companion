const items = [
  { id: 1, name: "AirPods case (white)", location: "Library, Floor 2", date: "15 Apr 2026", status: "Found" },
  { id: 2, name: "Blue North Face jacket", location: "Sports Complex changing room", date: "14 Apr 2026", status: "Found" },
  { id: 3, name: "Student ID card — Sarah M.", location: "Canteen, Table area", date: "13 Apr 2026", status: "Found" },
  { id: 4, name: "Black umbrella", location: "Lecture Theatre A", date: "12 Apr 2026", status: "Found" },
  { id: 5, name: "Calculus textbook", location: "Room 204, Block B", date: "11 Apr 2026", status: "Found" },
  { id: 6, name: "Green Hydro Flask bottle", location: "Gym, Weights area", date: "10 Apr 2026", status: "Found" },
  { id: 7, name: "Keys with Toyota fob", location: "Car Park B", date: "9 Apr 2026", status: "Found" },
  { id: 8, name: "Glasses case (brown)", location: "Student Union, Main Hall", date: "8 Apr 2026", status: "Found" },
];

export default function LostAndFoundPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}>
          Lost & Found
        </h1>
        <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
          Items handed in to campus reception. Contact security to claim yours.
        </p>
      </div>

      {/* Table header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 2fr 1fr 80px",
        gap: "1rem",
        padding: "0.6rem 1.25rem",
        background: "var(--navy)",
        borderRadius: "8px 8px 0 0",
        color: "rgba(255,255,255,0.7)",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}>
        <span>Item</span>
        <span>Location Found</span>
        <span>Date</span>
        <span>Status</span>
      </div>

      {/* Rows */}
      <div style={{
        border: "1px solid var(--border)",
        borderTop: "none",
        borderRadius: "0 0 8px 8px",
        overflow: "hidden",
      }}>
        {items.map((item, i) => (
          <div key={item.id} style={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr 1fr 80px",
            gap: "1rem",
            padding: "1rem 1.25rem",
            alignItems: "center",
            background: i % 2 === 0 ? "var(--surface)" : "var(--bg)",
            borderBottom: i < items.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <span style={{ fontWeight: 500, color: "var(--navy)", fontSize: "0.925rem" }}>
              {item.name}
            </span>
            <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
              📍 {item.location}
            </span>
            <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
              {item.date}
            </span>
            <span style={{
              display: "inline-block",
              background: "#dcfce7",
              color: "#166534",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.2rem 0.6rem",
              borderRadius: "999px",
              textAlign: "center",
            }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--muted)" }}>
        To claim an item, bring your student ID to the Security Office (Block A, Ground Floor), open Mon–Fri 9am–5pm.
      </p>
    </div>
  );
}
