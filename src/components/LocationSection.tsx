import styles from "@/css/Location.module.css";

export function LocationSection() {
  return (
    <>
      <section id="location" className={styles.section}>
        <div>
          <h2 className={`${styles.title} h3 mb-1`}>Visit Us</h2>
          <p className={`${styles.sub} mb-0`}>
            Find us in Multan, Pakistan. Fresh mangoes available seasonally.
          </p>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-md-6">
            <div className={`${styles.contactCard} p-3`}>
              <h3 className={`${styles.h3} h5 mb-3`}>Contact</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">📱</span>
                  <div>
                    <strong>Phone/WhatsApp:</strong> 03166136973
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">📧</span>
                  <div>
                    <strong>Email:</strong> Mangodelights111@gmail.com
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">📍</span>
                  <div>
                    <strong>Address:</strong> Qasim Bela Road near Khirpur Bhutta in Multan
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h3 className={`${styles.h3} h5 mb-3`}>Map</h3>
            <div className={styles.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8164378374!2d71.46706831498158!3d30.198478281825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393aea3c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sQasim%20Bela%20Road%2C%20Multan!5e0!3m2!1sen!2s!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.iframe}
                title="Mango Delight Location - Qasim Bela Road, Multan"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="py-5" />
    </>
  );
}
