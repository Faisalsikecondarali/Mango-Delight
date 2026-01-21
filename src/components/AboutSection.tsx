import { Link } from "react-router-dom";
import styles from "@/css/About.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div>
        <h2 className={`${styles.title} h3 mb-1`}>About Mango Delight</h2>
        <p className={`${styles.sub} mb-0`}>
          From our farms to your doorstep — the freshest mangoes in Pakistan.
        </p>
      </div>

      <div className="row g-3 g-lg-4 mt-3">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="/mango.svg" alt="Mango" className={styles.iconImg} />
            </div>
            <div className={styles.featureTitle}>Farm Fresh</div>
            <div className={styles.featureText}>Handpicked at peak ripeness.</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="/mango.svg" alt="Mango" className={styles.iconImg} />
            </div>
            <div className={styles.featureTitle}>Secure Packing</div>
            <div className={styles.featureText}>Damage-safe delivery guaranteed.</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="/mango.svg" alt="Mango" className={styles.iconImg} />
            </div>
            <div className={styles.featureTitle}>Fast Delivery</div>
            <div className={styles.featureText}>Across Pakistan in 24–48 hours.</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="/mango.svg" alt="Mango" className={styles.iconImg} />
            </div>
            <div className={styles.featureTitle}>Customer Trust</div>
            <div className={styles.featureText}>Thousands of happy customers.</div>
          </div>
        </div>
      </div>

      <div className={`${styles.ctaRow} mt-4`}>
        <div>
          <p className={`${styles.sub} mb-0`}>Have questions? We’re here to help.</p>
        </div>
        <div className="d-flex gap-2">
          <Link to="/contact" className={`btn ${styles.btnSecondary}`}>
            Contact Us
          </Link>
          <Link to="/menu" className={`btn ${styles.btnPrimary}`}>
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
