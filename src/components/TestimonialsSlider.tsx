import { useEffect, useMemo, useState } from "react";
import styles from "@/css/TestimonialsSlider.module.css";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  tag?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ayesha",
    role: "Lahore",
    rating: 5,
    tag: "Verified order",
    text: "I ordered Chaunsa (10kg) and the quality was genuinely premium — clean fruit, great aroma, and not a single damaged piece. Packing was solid and delivery updates on WhatsApp were quick. Will order again in-season.",
  },
  {
    name: "Ali",
    role: "Karachi",
    rating: 5,
    tag: "Repeat buyer",
    text: "Export-like quality for the price. The box arrived safe, mangoes were uniform and sweet, and the taste was exactly what you want in mango season. Smooth ordering experience — simple and professional.",
  },
  {
    name: "Hira",
    role: "Islamabad",
    rating: 4,
    tag: "Family order",
    text: "Premium pack was worth it — juicy mangoes with excellent sweetness. Only 1–2 pieces were slightly soft (still fine), but overall quality and packing were great. Delivery was on time.",
  },
  {
    name: "Usman",
    role: "Faisalabad",
    rating: 5,
    tag: "Fast delivery",
    text: "Loved the transparency — they told me availability and date-wise pricing upfront. The box was neatly packed and the mangoes were fresh. Great customer service on WhatsApp.",
  },
];

function Stars({ rating }: { rating: number }) {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className={styles.stars} aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < clamped;
        return (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.star} ${filled ? styles.filled : styles.empty}`}
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
              fill="currentColor"
            />
          </svg>
        );
      })}
    </div>
  );
}

function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/923166136973?text=${text}`;
}

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={`${styles.title} h3 mb-0`}>
          Loved by customers
        </h2>
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.name} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Stars rating={t.rating} />
                  {t.tag ? (
                    <span className={styles.badge}>
                      {t.tag}
                    </span>
                  ) : null}
                </div>
                <p className={styles.quote}>
                  “{t.text}”
                </p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.name.slice(0, 1)}
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Have feedback? We read every message.
        </p>
        <a
          href={buildWhatsAppUrl(
            [
              "Mango Delight Feedback",
              "",
              "Name:",
              "City:",
              "Ordered variety (optional):",
              "Rating (1-5):",
              "Message:",
            ].join("\n"),
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.feedbackBtn}
        >
          Give Feedback
        </a>
      </div>
    </div>
  );
}
