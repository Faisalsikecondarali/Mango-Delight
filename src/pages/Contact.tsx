import { OrderForm } from "@/components/OrderForm";
import styles from "@/css/ContactPage.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className="py-4" />
      <section className={styles.sectionBox}>
        <h1 className={`${styles.title} h2 mb-0`}>Contact</h1>
        <p className={`${styles.sub} mt-2 mb-0`}>
          Place your mango order in seconds. We’ll receive it on WhatsApp and
          confirm availability, price, and delivery time.
        </p>
      </section>

      <section className={styles.sectionBox}>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-2">
          <div>
            <p className={styles.formNote}>Secure order form</p>
            <p className={`${styles.formSub} mb-0`}>
              Minimum order is 10 kg. Your details are sent directly to WhatsApp.
            </p>
          </div>
          <p className={`${styles.whatsapp} mb-0`}>WhatsApp: 03166136973</p>
        </div>

        <div className="mt-3">
          <OrderForm />
        </div>
      </section>
      <div className="py-4" />

      <section>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>Phone / WhatsApp</div>
              <div className={styles.infoText}>03166136973</div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>Email</div>
              <div className={styles.infoText}>Mangodelights111@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4" />

      <section className={styles.sectionBox}>
        <div className={styles.infoTitle}>Address</div>
        <div className={styles.infoText}>
          Qasim Bela Road near Khirpur Bhutta in Multan
        </div>
      </section>
      <div className="py-4" />

      <section className={styles.sectionBox}>
        <div className={styles.infoTitle}>Business hours</div>
        <div className={styles.infoText}>Mon–Sun: 10:00 AM – 10:00 PM</div>
      </section>
      <div className="py-5" />
    </div>
  );
}
