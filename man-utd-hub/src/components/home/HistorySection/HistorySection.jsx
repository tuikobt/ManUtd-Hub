import React from "react";
import styles from "./HistorySection.module.scss";
import StatCard from "../../common/StatCard/StatCard";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuTicketCheck } from "react-icons/lu";
import { LuMedal } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HistorySection = ({ id }) => {
  return (
    <section id={id} className={`${styles.section} section-scroll-target`}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.label}>Club Heritage</span>

          <h2 className={styles.title}>
            Forged in Industry,
            <br />
            Striving for <span className={styles.titleHighlight}>Glory.</span>
          </h2>

          <p className={styles.description}>
            Founded in 1878 as Newton Heath LYR Football Club, Manchester United
            has evolved into one of the most successful clubs in world football.
            Our history is defined by resilience, from the tragedy of Munich to
            the triumph of the Treble.
          </p>

          <div className={styles.milestoneList}>
            <div className={styles.milestone}>
              <div className={styles.milestoneIcon}>
                <FaChevronUp className="material-symbols-outlined" />
              </div>
              <div>
                <h4 className={styles.milestoneTitle}>The Busby Babes</h4>
                <p className={styles.milestoneDesc}>
                  A youthful team that captured the heart of the nation and
                  conquered Europe.
                </p>
              </div>
            </div>

            <div className={styles.milestone}>
              <div className={styles.milestoneIcon}>
                <FaAngleDoubleUp className="material-symbols-outlined" />
              </div>
              <div>
                <h4 className={styles.milestoneTitle}>The Class of '92</h4>
                <p className={styles.milestoneDesc}>
                  Homegrown talents who became global superstars and dominated
                  the Premier League.
                </p>
              </div>
            </div>
          </div>

          <button className={styles.readMoreBtn}>
            Read Full History
            <HiOutlineArrowNarrowRight
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            />
          </button>
        </div>

        <div className={styles.rightContent}>
          <StatCard icon={<LuTrophy />} number="20" label="League Titles" />

          <StatCard
            icon={<FaGlobeAmericas />}
            number="03"
            label="European Cups"
            isStaggered={true}
          />

          <StatCard icon={<LuTicketCheck />} number="13" label="FA Cups" />

          <StatCard
            icon={<LuMedal />}
            number="21"
            label="Community Shields"
            isStaggered={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
