import React from "react";
import styles from "./HeroSection.module.scss";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const HeroSection = () => {
  const bgImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD19NbctbtiVAJuFHQdXCn2fVJmb_P4-pMucfUqIZPrJ4un40Bs0DtUMZw7quIpuAOOFy1shRKiQnZiYPV0WWOu-xloDCGjZaCWbx2nxqumKNwxyOu-62ueZOn-97w4vcY4q1Ko7g902Wy5Ot7MCncAZh3X4GenuflkDqySFvW_AG1Kq7GG4d1U48OSqcv616A_9BbhZsFWT2lksvgOwt1CgLCgIJY8iC-auo12VLCEbt5e2rnzL9anRofIxFenmTKh9o4bN2lXt44";

  return (
    <section className={styles.hero}>
      <div
        className={styles.hero__card}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url('${bgImage}')`,
        }}
      >
        <div className={styles.hero__overlay}></div>

        <div className={styles.hero__content}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <span className={styles.hero__badge}>
              <MdOutlineVerified
                className="material-symbols-outlined"
                style={{ fontSize: "14px" }}
              />
              Official Fan Community
            </span>
          </div>

          <h1 className={styles.hero__title}>
            THEATRE OF <br />
            <span className={styles["hero__title-highlight"]}>DREAMS</span>
          </h1>

          <p className={styles.hero__description}>
            Experience the passion, the history, and the glory of the world's
            greatest football club. United we stand.
          </p>

          <div className={styles.hero__cta}>
            <button className={styles.hero__btn}>
              <span>Explore History</span>
              <HiOutlineArrowNarrowDown className="material-symbols-outlined" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
