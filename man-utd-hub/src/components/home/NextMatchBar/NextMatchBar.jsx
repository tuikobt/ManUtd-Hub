import React from "react";
import styles from "./NextMatchBar.module.scss";
import { FaRegCalendar } from "react-icons/fa6";
import { useMatchData } from "../../../hooks/useMatchData";

const NextMatchBar = () => {
  const { nextMatch, prevMatch, loading } = useMatchData();

  if (loading) {
    return (
      <section className={styles.matchBar}>
        <div style={{ padding: "20px", color: "#da291c", textAlign: "center" }}>
          Loading match data...
        </div>
      </section>
    );
  }

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
              {nextMatch?.league} • {nextMatch?.time}
            </span>
          </div>
        </div>

        <div className={styles.matchBar__matchup}>
          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>
              {nextMatch?.home.name}
            </span>
            <span className={styles["matchBar__team-role--primary"]}>
              {nextMatch?.home.role}
            </span>
          </div>

          <div className={styles.matchBar__vs}>VS</div>

          <div className={styles.matchBar__team}>
            <span
              className={`${styles["matchBar__team-name"]} ${styles["matchBar__team-name--gray"]}`}
            >
              {nextMatch?.away.name}
            </span>
            <span className={styles["matchBar__team-role--primary"]}>
              {nextMatch?.away.role}
            </span>
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
              {prevMatch?.league} • {prevMatch?.time}
            </span>
          </div>
        </div>

        <div className={styles.matchBar__matchup}>
          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>
              {prevMatch?.home.score}
            </span>
            <span className={styles["matchBar__team-role--secondary"]}>
              {prevMatch?.home.name}
            </span>
          </div>

          <div className={styles.matchBar__vs}>:</div>

          <div className={styles.matchBar__team}>
            <span className={styles["matchBar__team-name"]}>
              {prevMatch?.away.score}
            </span>
            <span className={styles["matchBar__team-role--secondary"]}>
              {prevMatch?.away.name}
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
