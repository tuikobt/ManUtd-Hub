import React from "react";
import styles from "./Header.module.scss";
import { IoFootballSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__content}>
          <div className={styles.header__left}>
            <a href="#" className={styles.header__brand}>
              <div className={styles["header__logo-box"]}>
                <IoFootballSharp
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                />
              </div>

              <h2 className={styles["header__brand-text"]}>
                Man Utd{" "}
                <span className={styles["header__text-highlight"]}>Hub</span>
              </h2>
            </a>

            <nav className={styles.header__nav}>
              <a href="#" className={styles["header__nav-link"]}>
                Home
              </a>
              <a href="#" className={styles["header__nav-link"]}>
                History
              </a>
              <a href="#" className={styles["header__nav-link"]}>
                Legends
              </a>
              <a href="#" className={styles["header__nav-link"]}>
                Community
              </a>
            </nav>
          </div>

          <div className={styles.header__right}>
            <button
              className={`${styles.header__btn} ${styles["header__btn--search"]}`}
            >
              <FaSearch
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              />
            </button>

            <button
              className={`${styles.header__btn} ${styles["header__btn--join"]}`}
            >
              <span>Join Hub</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
