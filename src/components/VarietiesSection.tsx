import { Link } from "react-router-dom";
import { mangoSchedule } from "@/data/mangoCatalog";
import styles from "@/css/Varieties.module.css";

export function VarietiesSection() {
  const featuredNames = ["Anwar Ratol", "White Chaunsa", "Multani Chaunsa"];
  const featured = mangoSchedule
    .filter((v) => featuredNames.includes(v.name))
    .sort(
      (a, b) => featuredNames.indexOf(a.name) - featuredNames.indexOf(b.name),
    );

  return (
    <section id="varieties" className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={`${styles.title} h3 mb-1`}>Mango Varieties</h2>
          <p className={`${styles.sub} mb-0`}>
            Choose your favorite — sweet, juicy, and fresh.
          </p>
        </div>
        <Link to="/menu" className={styles.link}>
          View all varieties
        </Link>
      </div>

      <div className="row g-3 mt-3">
        {featured.map((v) => (
          <div key={v.name} className="col-12 col-md-6 col-lg-4">
            <div className={styles.card}>
              <div className="d-flex align-items-start justify-content-between gap-3">
                <div>
                  <div className={`${styles.name} h5 mb-1`}>{v.name}</div>
                  <div className={`${styles.urdu} mb-1`}>
                    (<span className="md-urdu">{v.urdu}</span>)
                  </div>
                  <div className={styles.when}>Availability: {v.when}</div>
                </div>
                <div className={styles.thumb}>
                  <img src={v.img} alt={v.name} className={styles.thumbImg} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
                <div className={styles.price}>
                  Rs. {v.boxPriceRs} / {v.boxKg} kg box
                </div>
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.waBtn}`}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
