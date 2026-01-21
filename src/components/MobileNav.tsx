import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "@/css/MobileNav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: "home" as const },
  { href: "/menu", label: "Varieties", icon: "menu" as const },
  { href: "/about", label: "About", icon: "about" as const },
  { href: "/contact", label: "Contact", icon: "contact" as const },
];

function NavIcon({ name }: { name: (typeof NAV_LINKS)[number]["icon"] }) {
  switch (name) {
    case "home":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "menu":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 13c2.8-1.7 5.6-2.6 8.4-2.6 2.6 0 5.2.8 7.6 2.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 13c0 4.4 2.7 9 6 9s6-4.6 6-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 3c-2.8 1.6-4.6 3.8-5.4 6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "about":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20c1.6-3.5 4.6-6 8-6s6.4 2.5 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "contact":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="2" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="d-md-none">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={styles.hamburger}
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open ? (
        <div className={styles.overlay}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className={styles.backdrop}
          />
          <div className={styles.menuBox}>
            <div className="d-grid gap-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={styles.link}
                >
                  <span className="d-inline-flex align-items-center gap-2">
                    <NavIcon name={l.icon} />
                    <span>{l.label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
