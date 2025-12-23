import React from "react";
import styles from "./VideoCard.module.scss";
import { FaPlay } from "react-icons/fa6";

const VideoCard = ({ image, category, title }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__bg}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      <div className={styles.card__overlay}>
        <div className={styles.card__playBtn}>
          <FaPlay className="material-symbols-outlined" />
        </div>
      </div>

      <div className={styles.card__info}>
        <span className={styles.card__category}>{category}</span>
        <p className={styles.card__title}>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
