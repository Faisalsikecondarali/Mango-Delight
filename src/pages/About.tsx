import styles from "@/css/AboutPage.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className="py-4" />
      <section className={styles.sectionBox}>
        <div className={`${styles.blob} ${styles.blobRight}`} />
        <div className={`${styles.blob} ${styles.blobLeft}`} />

        <div className="row g-4 align-items-center position-relative">
          <div className="col-12 col-lg-6">
            <p className={styles.badge}>Farm to Doorstep</p>
            <h1 className={`${styles.h1} h2 mt-3 mb-0`}>How we keep mangoes fresh</h1>
            <p className={`${styles.sub} mt-2 mb-0`}>
              Our process is simple and transparent: we pick mangoes fresh from
              the orchard, sort and check quality, pack safely, and deliver to
              your home.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2 mt-3">
              <a
                href="https://wa.me/923166136973"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnWhatsapp}`}
              >
                Order on WhatsApp
              </a>
              <a href="/#pricing" className={`btn ${styles.btnSecondary}`}>
                View Date-wise Pricing
              </a>
            </div>

            <div className="row g-2 mt-3">
              <div className="col-12 col-sm-4">
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Fresh picking</div>
                  <div className={styles.statSub}>Daily batches</div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Quality checks</div>
                  <div className={styles.statSub}>Trusted farms</div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Safe packing</div>
                  <div className={styles.statSub}>Damage-safe</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className={styles.mediaCard}>
              <div className={styles.mediaRatio}>
                <img src="/R.jpg" alt="Mango farm" className={styles.mediaImg} />
              </div>
              <div className={styles.mediaCaption}>Fresh farm photo.</div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4" />
      <section className={styles.sectionBox}>
        <div className="d-flex flex-column flex-sm-row align-items-sm-end justify-content-sm-between gap-2">
          <div>
            <h2 className={`${styles.h2} h3 mb-1`}>Our process</h2>
            <p className={`${styles.sub} mb-0`}>
              From orchard to packing — designed for freshness and trust.
            </p>
          </div>
          <p className={`${styles.processNote} mb-0`}>Minimum order: 10kg</p>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.processCard}>
              <div className={styles.stepImgWrap}>
                <img src="/fresh.webp" alt="Fresh picking" className={styles.stepImg} />
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepTitle}>Fresh picking</div>
              </div>
              <div className={styles.stepText}>
                Mangoes are picked fresh from the orchard at the right time.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.processCard}>
              <div className={styles.stepImgWrap}>
                <img src="/sort.jpg" alt="Sorting and checks" className={styles.stepImg} />
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepTitle}>Sorting & checks</div>
              </div>
              <div className={styles.stepText}>
                We remove damaged pieces and keep only quality mangoes.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.processCard}>
              <div className={styles.stepImgWrap}>
                <img src="/pack.webp" alt="Safe packing" className={styles.stepImg} />
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepTitle}>Safe packing</div>
              </div>
              <div className={styles.stepText}>
                Packed carefully in 10kg boxes to reduce bruising in delivery.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.processCard}>
              <div className={styles.stepImgWrap}>
                <img src="/del.webp" alt="Delivery" className={styles.stepImg} />
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className={styles.stepNum}>4</div>
                <div className={styles.stepTitle}>Delivery</div>
              </div>
              <div className={styles.stepText}>
                Your order is delivered to your address across Pakistan.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4" />
      <section>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className={styles.promiseCard}>
              <div className={styles.promiseTitle}>Our promise</div>
              <div className={styles.promiseText}>
                Farm-fresh mangoes with honest selection and consistent quality.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.promiseCard}>
              <div className={styles.promiseTitle}>How we pack</div>
              <div className={styles.promiseText}>
                Protective packing to reduce damage and keep mangoes fresh.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.promiseCard}>
              <div className={styles.promiseTitle}>Seasonal focus</div>
              <div className={styles.promiseText}>
                Availability changes with the season — we share updates on WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5" />
    </div>
  );
}
