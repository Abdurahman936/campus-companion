import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/helpdesk">Helpdesk</Link>
      <Link href="/lost-and-found">Lost & Found</Link>
      <Link href="/accessibility">Accessibility</Link>
    </nav>
  );
}
