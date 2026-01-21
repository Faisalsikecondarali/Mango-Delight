import styles from "@/css/Hero.module.css";

export function Hero() {
  return (
    <section className={`${styles.heroSection} w-full`}>
      <div className={`${styles.heroBox} ${styles.heroContainer} w-full`}>

        <div className="max-w-7xl mx-auto px-4 px-lg-6">
          <div className={`row g-4 g-lg-5 align-items-center ${styles.heroGrid}`}>
          <div className={`col-12 col-lg-6 text-center text-lg-start ${styles.leftCol}`}>
            <p className={`${styles.badge} ${styles.heroBadge}`}>10% Off • 100% Organic</p>
            <h1 className={`${styles.title} mt-3`}>Fresh & Juicy Mangoes Delivered to Your Doorstep</h1>
            <p className={`${styles.desc} mt-2`}>
              Premium mango varieties, farm-picked and carefully packed. Order in
              minutes — enjoy the taste of real mango season.
            </p>

            <div className={`d-flex flex-column flex-lg-row gap-2 gap-lg-3 mt-3 ${styles.actions}`}>
              <a
                href="https://wa.me/923166136973"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.primaryBtn} ${styles.btnPrimary}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.1 4 4.1-1.1A10 10 0 1 0 12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M8 12s1-2 4-2 4 2 4 2-1 2-4 2-4-2-4-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Order Now
              </a>
              <a
                href="#varieties"
                className={`btn ${styles.secondaryBtn} ${styles.btnSecondary}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View Mango Varieties
              </a>
            </div>

            <div className={`mt-3 ms-3 me-lg-0 ${styles.infoGrid}`}>
              <div className={`${styles.infoCard} ${styles.infoItem}`}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 13c2.8-1.7 5.6-2.6 8.4-2.6 2.6 0 5.2.8 7.6 2.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M6 13c0 4.4 2.7 9 6 9s6-4.6 6-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M12 3c-2.8 1.6-4.6 3.8-5.4 6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className={styles.infoTitle}>Farm-picked</div>
                    <div className={styles.infoSub}>Fresh supply</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.infoCard} ${styles.infoItem}`}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7h18v10H3V7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M3 11h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className={styles.infoTitle}>Secure packing</div>
                    <div className={styles.infoSub}>Damage-safe</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.infoCard} ${styles.infoItem}`}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className={styles.infoTitle}>Trusted</div>
                    <div className={styles.infoSub}>Repeat buyers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end ${styles.rightCol}`}>
            <div className={`${styles.rightCard} md-soft-shadow md-mango-float`}>
              <div className={styles.rightCardInner}>
                <div className={styles.rightIconWrap}>
                  <img src="/mango.svg" alt="Mango" className={styles.rightIconImg} />
                </div>
                <div className={styles.rightTitle}>Premium Mango Box</div>
                <div className={styles.rightDesc}>Carefully packed for safe delivery.</div>
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.rightCta} ${styles.btnWhatsapp}`}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
