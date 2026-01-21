import { mangoSchedule } from "@/data/mangoCatalog";
import styles from "@/css/PricingEditor.module.css";

export default function PricingEditor() {
  const sample = JSON.stringify(
    mangoSchedule.map((m) => ({
      name: m.name,
      urdu: m.urdu,
      boxKg: m.boxKg,
      boxPriceRs: m.boxPriceRs,
      when: m.when,
      img: m.img,
    })),
    null,
    2,
  );

  return (
    <div className={styles.page}>
      <section className={styles.sectionBox}>
        <h1 className={`${styles.title} h2 mb-0`}>Pricing Editor</h1>
        <p className={`${styles.sub} mt-2 mb-0`}>
          This page is for quick updates. To change prices or add a new variety,
          edit <span className={styles.fwBold}>src/data/mangoCatalog.ts</span> and
          deploy.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-12 col-sm-4">
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>Where to edit</div>
              <div className={styles.infoText}>src/data/mangoCatalog.ts</div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>What to change</div>
              <div className={styles.infoText}>boxPriceRs, when, name, urdu, img</div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>Auto updates</div>
              <div className={styles.infoText}>Home, Menu, Order form</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionBox}>
        <h2 className={`${styles.title} h3 mb-1`}>Catalog JSON</h2>
        <p className={`${styles.sub} mb-0`}>
          Copy this JSON, update values, then paste into the
          <span className={styles.fwBold}> mangoSchedule</span> array.
        </p>

        <pre className={styles.codeBox}>
          <code>{sample}</code>
        </pre>
      </section>
    </div>
  );
}
