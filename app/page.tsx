import Link from "next/link";

const features = [
  {
    href: "/events",
    icon: "🎉",
    title: "Events",
    desc: "Discover what's happening on campus — clubs, lectures, socials and more.",
  },
  {
    href: "/helpdesk",
    icon: "🛎️",
    title: "Helpdesk",
    desc: "Get support for IT, admin, accommodation and student services.",
  },
  {
    href: "/lost-and-found",
    icon: "🔍",
    title: "Lost & Found",
    desc: "Report lost items or check if something you've misplaced has been handed in.",
  },
  {
    href: "/accessibility",
    icon: "♿",
    title: "Accessibility",
    desc: "Find resources, support and campus accessibility information.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "var(--navy)",
        color: "#fff",
        padding: "5rem 1.5rem 4rem",
        textAlign: "center",
      }}>
        <p style={{
          color: "var(--gold)",
          fontWeight: 600,
          fontSize: "0.85rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          Welcome to
        </p>
        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          margin: "0 0 1.25rem",
          letterSpacing: "-0.02em",
        }}>
          Your Campus,<br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Connected.</em>
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.65)",
          maxWidth: "480px",
          margin: "0 auto 2rem",
          lineHeight: 1.6,
        }}>
          Everything you need as a student — events, support, lost items, and accessibility resources — in one place.
        </p>
        <Link href="/events" style={{
          display: "inline-block",
          background: "var(--gold)",
          color: "var(--navy)",
          fontWeight: 600,
          fontSize: "0.95rem",
          padding: "0.75rem 1.75rem",
          borderRadius: "8px",
          textDecoration: "none",
        }}>
          Browse Events
        </Link>
      </section>

      {/* Feature Cards */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}>
        <h2 style={{
          fontSize: "1.6rem",
          fontWeight: 600,
          marginBottom: "2rem",
          color: "var(--navy)",
        }}>
          What can we help with?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}>
          {features.map(({ href, icon, title, desc }) => (
            <Link key={href} href={href} style={{ textDecoration: "none" }}>
              <div className="feature-card" style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.75rem 1.5rem",
                height: "100%",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--navy)",
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
