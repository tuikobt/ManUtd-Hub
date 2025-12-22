import React from "react";
import styles from "./StatCard.module.scss";

const StatCard = ({ icon, number, label, isStaggered }) => {
  return (
    <div
      className={`${styles.card} ${
        isStaggered ? styles["card--staggered"] : ""
      }`}
    >
      <span className={`material-symbols-outlined ${styles.card__icon}`}>
        {icon}
      </span>
      <span className={styles.card__number}>{number}</span>
      <span className={styles.card__label}>{label}</span>
    </div>
  );
};

export default StatCard;
