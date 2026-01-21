import React from 'react'
import { Link } from 'react-router-dom'
import styles from '@/css/Layout.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-lg">
        <div className="row g-4 text-center text-sm-start">
          <div className="col-12 col-sm-6 col-lg-4">
            <Link to="/" className="d-inline-flex align-items-center justify-content-center justify-content-sm-start gap-3 text-decoration-none">
              <img
                src="/LOGO%20(2).png"
                alt="Mango Delight"
                className={styles.logo}
              />
              <span className={styles.footerHeading}>
                Mango Delight
              </span>
            </Link>
            <p className="mt-2 mb-0">
              Fresh & premium mangoes — packed with care and delivered to your
              doorstep.
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 mt-2">
              <a
                href="https://wa.me/923166136973"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="WhatsApp"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2a10 10 0 0 0-8.6 15l-1.1 4 4.1-1.1A10 10 0 1 0 12 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className={styles.footerHeading}>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className={styles.footerIcon}>📱</span>
                <span className="ms-2">03166136973</span>
              </li>
              <li className="mb-2">
                <span className={styles.footerIcon}>📧</span>
                <span className="ms-2">Mangodelights111@gmail.com</span>
              </li>
              <li className="mb-2">
                <span className={styles.footerIcon}>📍</span>
                <span className="ms-2">Qasim Bela Road, Multan</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className={styles.footerHeading}>Business Hours</h5>
            <ul className="list-unstyled">
              <li className="mb-1">Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li className="mb-1">Saturday: 10:00 AM - 10:00 PM</li>
              <li className="mb-1">Sunday: 10:00 AM - 10:00 PM</li>
              <li className="mt-2">
                <small className="text-muted">Seasonal availability: June - August</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0">© 2024 Mango Delight. All rights reserved.</p>
          <p className="mb-0 mt-1">
            <small className="text-muted">
              Fresh mangoes delivered with love across Pakistan 🥭
            </small>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
