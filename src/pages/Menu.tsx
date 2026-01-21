import React from 'react';
import { mangoSchedule } from '@/data/mangoCatalog';
import styles from '@/css/Menu.module.css';

function Menu() {
  return (
    <div className={styles.page}>
      <div className="py-4" />
      <div className={styles.sectionBox}>
        <div className={styles.headerRow}>
          <div className={styles.iconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13c2.8-1.7 5.6-2.6 8.4-2.6 2.6 0 5.2.8 7.6 2.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 13c0 4.4 2.7 9 6 9s6-4.6 6-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 3c-2.8 1.6-4.6 3.8-5.4 6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h2 className={`${styles.title} h3 mb-1`}>Mango Varieties</h2>
            <p className={`${styles.sub} mb-0`}>
              Explore our complete collection of premium mango varieties
            </p>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={`table ${styles.table}`}>
            <thead>
              <tr>
                <th className={styles.th}>Image</th>
                <th className={styles.th}>Variety</th>
                <th className={styles.th}>Urdu Name</th>
                <th className={styles.th}>Availability</th>
                <th className={styles.th}>Price</th>
                <th className={styles.th}>Order</th>
              </tr>
            </thead>
            <tbody>
              {mangoSchedule.map((v) => (
                <tr key={v.name}>
                  <td className={styles.td}>
                    <img src={v.img} alt={v.name} className={styles.thumbImg} style={{ width: '48px', height: '48px', borderRadius: '0.5rem', objectFit: 'cover' }} />
                  </td>
                  <td className={styles.td}>
                    <div className={styles.name}>{v.name}</div>
                  </td>
                  <td className={styles.td}>
                    <span className="md-urdu">{v.urdu}</span>
                  </td>
                  <td className={styles.td}>
                    <span className={styles.when}>{v.when}</span>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.price}>Rs. {v.boxPriceRs} / {v.boxKg} kg box</div>
                  </td>
                  <td className={styles.td}>
                    <a
                      href="https://wa.me/923166136973"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${styles.waBtn}`}
                    >
                      Order
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-5" />
    </div>
  );
}

export default Menu;
