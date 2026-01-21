import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { MobileNav } from './MobileNav'
import styles from '@/css/Layout.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className="container-lg d-flex align-items-center justify-content-between py-3">
        <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
          <img
            src="/LOGO%20(2).png"
            alt="Mango Delight"
            className={styles.logo}
          />
          <span className={styles.brandText}>
            Mango Delight
          </span>
        </Link>

        <nav className="d-none d-md-flex align-items-center gap-3">
          <Link to="/" className={styles.navLink}>
            <span className={styles.navIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </span>
            Home
          </Link>

          <Link to="/menu" className={styles.navLink}>
            <span className={styles.navIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 13c2.8-1.7 5.6-2.6 8.4-2.6 2.6 0 5.2.8 7.6 2.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 13c0 4.4 2.7 9 6.9s6-4.6 6-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 3c-2.8 1.6-4.6 3.8-5.4 6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            Varieties
          </Link>
          <Link to="/about" className={styles.navLink}>
            <span className={styles.navIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12a4 4 0 1 0-8 4 0 0 8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 20c1.6-3.5 4 6.4 6.4 0 0 0 8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 20c1.6-3.5 4 6.4 6.4 0 0 0 8Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            <span className={styles.navIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="2"/>
                <path d="m4 7 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Contact
          </Link>
          <ThemeToggle />
          <a
            href="https://wa.me/923166136973"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn d-flex align-items-center gap-2 ${styles.whatsappBtn}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.1 4 4.1-1.1A10 10 0 1 0 12 2z" fill="#25D366"/>
              <path d="M17.5 14c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.2-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4-.1-.1-.4-1.2-.6-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4z" fill="white"/>
            </svg>
            Order Now
          </a>
        </nav>

        <div className="d-flex d-md-none align-items-center gap-2">
          <ThemeToggle />
          <a
            href="https://wa.me/923166136973"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn d-flex align-items-center gap-2 ${styles.whatsappBtn}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.1 4 4.1-1.1A10 10 0 1 0 12 2z" fill="#25D366"/>
              <path d="M17.5 14c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.2-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4-.1-.1-.4-1.2-.6-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4z" fill="white"/>
            </svg>
            Order
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
