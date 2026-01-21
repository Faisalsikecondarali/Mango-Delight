import styles from "@/css/Testimonials.module.css";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <div>
        <h2 className={`${styles.title} h3 mb-1`}>What Our Customers Say</h2>
        <p className={`${styles.sub} mb-0`}>
          Real reviews from mango lovers across Pakistan.
        </p>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className={styles.card}>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.75L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className={styles.quote}>
            “Best mangoes I’ve ever had! Fresh, sweet, and perfectly packed. Will order again.”
          </p>
          <p className={styles.by}>— Ayesha, Karachi</p>
        </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={styles.card}>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.75L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className={styles.quote}>
            “Quick delivery and excellent quality. The Chaunsa mangoes were amazing!”
          </p>
          <p className={styles.by}>— Bilal, Lahore</p>
        </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={styles.card}>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.75L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className={styles.quote}>
            “Ordered a 10 kg box for my family. Everyone loved it. Highly recommend!”
          </p>
          <p className={styles.by}>— Sara, Islamabad</p>
        </div>
        </div>
      </div>
    </section>
  );
}
