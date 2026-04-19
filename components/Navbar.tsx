import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{ background: "var(--navy)" }}>
      <nav style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--gold)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}>
          Campus Companion
        </Link>

        <ul style={{
          display: "flex",
          gap: "0.25rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}>
          {[
            { href: "/events", label: "Events" },
            { href: "/helpdesk", label: "Helpdesk" },
            { href: "/lost-and-found", label: "Lost & Found" },
            { href: "/accessibility", label: "Accessibility" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="nav-link" style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                padding: "0.4rem 0.75rem",
                borderRadius: "6px",
                transition: "background 0.15s, color 0.15s",
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
