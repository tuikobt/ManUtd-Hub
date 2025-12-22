import React from "react";
import styles from "./NextMatchBar.module.scss";
import { FaRegCalendar } from "react-icons/fa6";

const NextMatchBar = () => {
  return (
    <section className={styles.matchBar}>
      <div className={styles.matchBar__container}>
        <div className={styles.matchBar__info}>
          <div className={styles.matchBar__icon}>
            <FaRegCalendar className="material-symbols-outlined" />
          </div>
          <div>
            <span className={styles.matchBar__label}>Next Match</span>
            <span className={styles.matchBar__time}>
              Premier League • Sunday 16:30
            </span>
          </div>
        </div>

        <div className={styles.matchBar__matchup}>
          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>MUN</span>
            <span className={styles["matchBar__team-role--primary"]}>Home</span>
          </div>

          <div className={styles.matchBar__vs}>VS</div>

          <div className={styles.matchBar__team}>
            <span
              className={`${styles["matchBar__team-name"]} ${styles["matchBar__team-name--gray"]}`}
            >
              LIV
            </span>
            <span className={styles["matchBar__team-role--primary"]}>Away</span>
          </div>
        </div>

        <div className={styles.matchBar__action}>
          <button className={styles.matchBar__btn}>Match Center</button>
        </div>
      </div>

      <div className={styles.matchBar__container}>
        <div className={styles.matchBar__info}>
          <div className={styles.matchBar__icon}>
            <FaRegCalendar className="material-symbols-outlined" />
          </div>
          <div>
            <span className={styles.matchBar__label}>Previous Match</span>
            <span className={styles.matchBar__time}>
              Premier League • Sunday 16:30
            </span>
          </div>
        </div>

        <div className={styles.matchBar__matchup}>
          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>3</span>
            <span className={styles["matchBar__team-role--secondary"]}>MU</span>
          </div>

          <div className={styles.matchBar__vs}>:</div>

          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>1</span>
            <span className={styles["matchBar__team-role--secondary"]}>
              TOT
            </span>
          </div>
        </div>

        <div className={styles.matchBar__action}>
          <button className={styles.matchBar__btn}>Match Center</button>
        </div>
      </div>
    </section>
  );
};

export default NextMatchBar;
