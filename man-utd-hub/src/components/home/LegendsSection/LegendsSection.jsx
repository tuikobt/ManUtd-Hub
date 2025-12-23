import React from "react";
import styles from "./LegendsSection.module.scss";
import PlayerCard from "../../common/PlayerCard/PlayerCard";
import VideoCard from "../../common/VideoCard/VideoCard";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdDiversity3 } from "react-icons/md";

const LegendsSection = ({ id }) => {
  return (
    <section id={id} className={`${styles.section} section-scroll-target`}>
      <div
        className={styles.bgOverlay}
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu_65Q6i36Cy07bNQ2c17VzEpI671YegZ0w-vN93IY8yBC06_CRC6kiQR101hgnVKVtn80ZmLfVJg0XtJMsmKFwTekPzqrAm3amJeb1D5lRwwtAv9fE0BnoFYNA88SyvXUaGi0GOmk_4Km33bOmkDD2BeDThMcDtArgyOCuSQk__4uNfV9semrqE5XeTk3c318liGMzxypJs1zVwKjYFxToyA_cAAza-aGpMgPuImCR4b_PKDdPar2FEleoJBRL8wjDqf2J135C1s')",
        }}
      ></div>

      <div className={styles.container}>
        {/* --- HEADER --- */}
        <div className={styles.header}>
          <div>
            <span className={styles.subTitle}>Hall of Fame</span>
            <h2 className={styles.title}>
              Club <span style={{ color: "#DA291C" }}>Legends</span>
            </h2>
          </div>
          <div className={styles.navBtns}>
            <button className={styles.navBtn}>
              <HiArrowNarrowLeft size={28} />
            </button>
            <button className={styles.navBtn}>
              <HiArrowNarrowRight size={28} />
            </button>
          </div>
        </div>

        {/* --- PLAYERS GRID --- */}
        <div className={styles.playerGrid}>
          <PlayerCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAgME-Yi-srtRcSx4vQIbkYZxuHNPO2Uut7ju-VxWSSMXOTD97oxfIco1BrPnvwetbH9xGCr-XjQjYsBCvu_4YzMikXRWr_vsOIUHcHVzkyBFMgICZw_HnYHKSPJYis79sNuHse4sKEs207gZGigfsGw-dMxarRcOUFTPv0h03MzX_IXs1w4eUn5r9v2J3fPjn9iaWhZ7HtrsvDc3AFU6J0Rpzklzk6PAFqNm1QRshYYW7ti2L9pixtIhLblSYzax4ZyVXDSjWorhI"
            name="The King"
            role="Forward"
            years="1992-1997"
          />
          <PlayerCard
            hasImage={false} // Demo thẻ không có ảnh
            name="Sir Bobby"
            role="Midfield"
            years="1956-1973"
          />
          <PlayerCard
            hasImage={false}
            name="Captain Marvel"
            role="Midfield"
            years="1981-1994"
          />
          <PlayerCard
            hasImage={false}
            name="The Welsh Wizard"
            role="Winger"
            years="1990-2014"
          />
        </div>

        {/* --- MOMENTS & VIDEOS --- */}
        <div className={styles.momentsWrapper}>
          <div className={styles.momentsLeft}>
            <h3 className={styles.momentsTitle}>Memorable Moments</h3>
            <p className={styles.momentsDesc}>
              Relive the goals that shook the world and the celebrations that
              defined a generation.
            </p>
            <button className={styles.viewArchiveBtn}>
              View Archive
              <HiOutlineArrowNarrowRight />
            </button>
          </div>

          <div className={styles.momentsRight}>
            <VideoCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBlDqWXzvdxcY2lDWgNyj6AJ05pTMvdVnj63k6liREwAKpk6hubWydu0QgvlwbUrCYwAZFtgja22wg3urFFDqXeoFwpvCDXz7u9x4yoqDOS2hotV6hUGiTRGwqLwnatibVRL326l1vJOTndFoBtbo8mvL09kvcchzBzN7_HOrEHnQmwPrQgTY_QyHiFHuJ1OYgSwakovX3fs02FoOvrWw4TU-NE_R17xQ1Yr8uInz3SlE5m23RyZ8L2W96XG-koPpprn7b6CAE_tn4"
              category="Academy"
              title="Youth Cup Final Highlights"
            />
            <VideoCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuA-lWAlGyFdPIDae5K7MyZsvmtL7qf1x_HxRKnS6m5F_AHEhb_YjCkv8BnFYYCkbqSEpKInq5RSS02HWxXqial9tGYgOQdgkpiU5BMqQ5I-l-H-rL_Lc5J1iEIcW2oaGaIX7dXFsAP4lOhshEXbSZ8GMuGDbklDdo0-EVgD036BoKPNF8w5SGAkWOhA6dUSxhT6sUJLV2DNRCxOPAT1DNoQAi7XeNdh4CMOnmA2irxnFWvjKLR7hCAAAfNBbfRh7lMzvKYZl8SEvL4"
              category="Training"
              title="Inside Training: Derby Prep"
            />
          </div>
        </div>

        {/* --- COMMUNITY CTA --- */}
        <div className={styles.ctaBox}>
          <div
            className={styles.ctaBg}
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMdilpS0818Widsp6tUTXkgKhI4rVjvCLb7Tyz6eXRvDK0iAYzJiK30PY22mAPWsDvg-oL5uiX1r1Z2CDr_h_GMfYsaQmhbjH5lavYMMnu04BcV_GEZdBDWmuuZ_2THYPUX_-Mx63PuKf3ctkLlEy_YE73JmwjYjDKG88QBBfCTCbmCn-8BbtauisQXFVrolLVZ49CVZ-Yau1tVA9w5AEHedSktLYNIfH8hrNGEgzxyHuwIujn8TnsCeo7IlYZzI7N_V-FwFtR3a4')",
            }}
          ></div>

          <div className={styles.ctaContent}>
            <MdDiversity3
              className={`material-symbols-outlined ${styles.ctaIcon}`}
            />
            <h2 className={styles.ctaTitle}>
              UNITED BY <span className={styles.textStroke}>PASSION</span>
            </h2>
            <p className={styles.ctaDesc}>
              Join the official fan community to connect with millions of Red
              Devils worldwide, get exclusive content, and make your voice
              heard.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnPrimary}>Join Community</button>
              <button className={styles.btnOutline}>Member Benefits</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;
