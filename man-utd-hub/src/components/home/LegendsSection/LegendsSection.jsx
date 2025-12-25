import React, { useState, useEffect } from "react";
import styles from "./LegendsSection.module.scss";
import PlayerCard from "../../common/PlayerCard/PlayerCard";
import VideoCard from "../../common/VideoCard/VideoCard";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdDiversity3 } from "react-icons/md";
import legendsData from "../../../data/legends.json";
import videosData from "../../../data/videosData.json";

const LegendsSection = ({
  id,
  onPlayerClick,
  onVideoCollectionOpen,
  onVideoOpen,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = legendsData.length - cardsToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = legendsData.length - cardsToShow;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const visiblePlayers = legendsData.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  const slicedVideos = videosData.videoCollection.slice(0, 2);

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleCardClick = (player) => {
    onPlayerClick(player);
  };

  const handleVideoCollectionClick = () => {
    onVideoCollectionOpen();
  };

  const handleVideoClick = (video) => {
    onVideoOpen(video);
  };

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
              <HiArrowNarrowLeft size={28} onClick={prevSlide} />
            </button>
            <button className={styles.navBtn}>
              <HiArrowNarrowRight size={28} onClick={nextSlide} />
            </button>
          </div>
        </div>

        {/* --- PLAYERS GRID --- */}
        <div className={styles.playerGrid}>
          {visiblePlayers.map((player) => (
            <div key={player.id} onClick={() => handleCardClick(player)}>
              <PlayerCard
                image={player.image_url}
                name={player.name}
                role={player.position}
                years={player.years_active}
                hasImage={!!player.image_url}
              />
            </div>
          ))}
        </div>

        {/* --- MOMENTS & VIDEOS --- */}
        <div className={styles.momentsWrapper}>
          <div className={styles.momentsLeft}>
            <h3 className={styles.momentsTitle}>Memorable Moments</h3>
            <p className={styles.momentsDesc}>
              Relive the goals that shook the world and the celebrations that
              defined a generation.
            </p>
            <button
              className={styles.viewArchiveBtn}
              onClick={() => handleVideoCollectionClick()}
            >
              View Archive
              <HiOutlineArrowNarrowRight />
            </button>
          </div>

          <div className={styles.momentsRight}>
            {slicedVideos.map((video) => (
              <div key={video.id} onClick={() => handleVideoClick(video)}>
                <VideoCard
                  image={getYouTubeThumbnail(video.id)}
                  category={video.category}
                  title={video.title}
                />
              </div>
            ))}
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
