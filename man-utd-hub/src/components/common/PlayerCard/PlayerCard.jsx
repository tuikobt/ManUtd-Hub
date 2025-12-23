import React from "react";
import styles from "./PlayerCard.module.scss";
import { MdOutlinePersonOutline } from "react-icons/md";

const PlayerCard = ({ image, name, role, years, hasImage = true }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        {hasImage ? (
          <div
            className={styles.card__image}
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        ) : (
          <div className={styles.card__placeholderIcon}>
            <MdOutlinePersonOutline
              style={{ fontSize: "3.75rem", opacity: 0.5 }}
            />
          </div>
        )}

        <div className={styles.card__gradient}></div>

        <div className={styles.card__content}>
          <h3 className={styles.card__name}>{name}</h3>
          <p className={styles.card__desc}>
            {role} • {years}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
