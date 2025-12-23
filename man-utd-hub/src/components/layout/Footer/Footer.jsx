import React from "react";
import styles from "./Footer.module.scss";
import { IoFootballSharp } from "react-icons/io5";

// Data config để code gọn hơn
const FOOTER_LINKS = [
  {
    title: "Club",
    items: ["First Team", "Academy", "Staff", "Old Trafford"],
  },
  {
    title: "Resources",
    items: ["Fixtures", "Results", "Stats Center", "Wallpapers"],
  },
  {
    title: "Community",
    items: ["Forum", "Fan Stories", "Local Chapters"],
  },
];

const Footer = ({ id }) => {
  return (
    <footer id={id} className={`${styles.footer} section-scroll-target`}>
      <div className={styles.container}>
        {/* --- LEFT: BRAND INFO --- */}
        <div className={styles.brandCol}>
          <div className={styles.brandInfo}>
            <div className={styles.logoBox}>
              <IoFootballSharp
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              />
            </div>
            <span className={styles.brandName}>Man Utd Hub</span>
          </div>

          <p className={styles.description}>
            The definitive digital home for Manchester United supporters across
            the globe. History, stats, and community in one place.
          </p>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>
              <span>TW</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <span>IG</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <span>YT</span>
            </a>
          </div>
        </div>

        {/* --- RIGHT: LINKS --- */}
        <div className={styles.linksWrapper}>
          {FOOTER_LINKS.map((group, index) => (
            <div key={index} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group.title}</h4>
              {group.items.map((item, idx) => (
                <a key={idx} href="#" className={styles.linkItem}>
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className={styles.bottomBar}>
        <p>
          © 2025 Man Utd Fan Hub.Developed by Minh Phuong Lee. Not officially
          affiliated with Manchester United FC.
        </p>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>
            Privacy
          </a>
          <a href="#" className={styles.legalLink}>
            Terms
          </a>
          <a href="#" className={styles.legalLink}>
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
