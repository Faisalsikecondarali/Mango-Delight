import { Link } from "react-router-dom";
import styles from "@/css/Pricing.module.css";

export function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={`${styles.title} h3 mb-1`}>Pricing & Packages</h2>
          <p className={`${styles.sub} mb-0`}>
            Choose the perfect package for your needs.
          </p>
        </div>
        <Link to="/menu" className={styles.link}>
          View all packages
        </Link>
      </div>

      <div className={styles.tableWrap}>
        <table className={`table mb-0 ${styles.table}`}>
          <thead>
            <tr>
              <th className={styles.th}>Variety</th>
              <th className={`${styles.th} text-center`}>Box Size</th>
              <th className={`${styles.th} text-center`}>Price</th>
              <th className={`${styles.th} text-center`}>Availability</th>
              <th className={`${styles.th} text-center`}>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Dusheri</td>
              <td className={`${styles.td} text-center`}>10 kg</td>
              <td className={`${styles.td} text-center`}>Rs. 2000</td>
              <td className={`${styles.td} text-center`}>Early / Mid June</td>
              <td className="text-center">
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.orderBtn}`}
                >
                  Order
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Langda</td>
              <td className={`${styles.td} text-center`}>6 kg</td>
              <td className={`${styles.td} text-center`}>Rs. 1500</td>
              <td className={`${styles.td} text-center`}>Mid June</td>
              <td className="text-center">
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.orderBtn}`}
                >
                  Order
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Anwar Ratol</td>
              <td className={`${styles.td} text-center`}>12 kg</td>
              <td className={`${styles.td} text-center`}>Rs. 2500</td>
              <td className={`${styles.td} text-center`}>Late June</td>
              <td className="text-center">
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.orderBtn}`}
                >
                  Order
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Sindhri</td>
              <td className={`${styles.td} text-center`}>8 kg</td>
              <td className={`${styles.td} text-center`}>Rs. 1800</td>
              <td className={`${styles.td} text-center`}>July</td>
              <td className="text-center">
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.orderBtn}`}
                >
                  Order
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Chaunsa (Multani/White/Black)</td>
              <td className={`${styles.td} text-center`}>10 kg</td>
              <td className={`${styles.td} text-center`}>Rs. 2200</td>
              <td className={`${styles.td} text-center`}>July - August</td>
              <td className="text-center">
                <a
                  href="https://wa.me/923166136973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.orderBtn}`}
                >
                  Order
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
