import React, { useState, useEffect } from "react";
import styles from "./VideoCollectionModal.module.scss";
import videoDataJson from "../../../data/videosData.json";
import { FaPlay } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaArrowRight, FaChevronUp } from "react-icons/fa6";

const VideoCollectionModal = ({ isOpen, onClose, video }) => {
  const { videoCollection } = videoDataJson;
  const getInitialVideo = (video) =>
    video == null ? videoCollection[0] : video;

  const [currentHeroVideo, setCurrentHeroVideo] = useState(
    getInitialVideo(video)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isViewAll, setIsViewAll] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const targetVideo = getInitialVideo(video);
      setCurrentHeroVideo(targetVideo);
      setIsPlaying(!!video);
    }
  }, [isOpen, video]);

  if (!isOpen) return null;

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoSelect = (video) => {
    setCurrentHeroVideo(video);
    setIsPlaying(true);
    document
      .querySelector(`.${styles.body}`)
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHeroPlay = () => {
    setIsPlaying(true);
  };

  const toggleViewAll = (e) => {
    e.preventDefault();
    setIsViewAll(!isViewAll);
  };

  const visibleVideos = isViewAll
    ? videoCollection
    : videoCollection.slice(0, 4);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* --- HEADER --- */}
        <div className={styles.header}>
          <div className={styles.headerTop} style={{ marginBottom: 0 }}>
            <div>
              <span className={styles.label}>Collection</span>
              <h2 className={styles.title}>Unforgettable Moments</h2>
            </div>
            <button className={styles.closeBtn} onClick={onClose}>
              <IoClose className="material-symbols-outlined" size={24} />
            </button>
          </div>
        </div>

        {/* --- BODY --- */}
        <div className={styles.body}>
          {/* FEATURED VIDEO (PLAYER) */}
          <div className={styles.featured}>
            {isPlaying ? (
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${currentHeroVideo.id}?autoplay=1&rel=0`}
                  title={currentHeroVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div
                className={styles.thumbnail}
                style={{
                  backgroundImage: `url('${
                    currentHeroVideo.thumbnail ||
                    getYouTubeThumbnail(currentHeroVideo.id)
                  }')`,
                }}
                onClick={handleHeroPlay}
              >
                <div className={styles.playOverlay}>
                  <div className={styles.playBtnLarge}>
                    <div className={styles.iconCircle}>
                      <FaPlay className="material-symbols-outlined" />
                    </div>
                  </div>
                </div>

                <div className={styles.featuredInfo}>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "8px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#da291c",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      NOW PLAYING
                    </span>
                    {currentHeroVideo.duration && (
                      <span
                        style={{
                          color: "#d1d5db",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: "14px" }}
                        >
                          schedule
                        </span>{" "}
                        {currentHeroVideo.duration}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.featTitle}>{currentHeroVideo.title}</h3>
                  <p style={{ color: "#d1d5db", maxWidth: "600px" }}>
                    {currentHeroVideo.desc || currentHeroVideo.time}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* GRID VIDEOS */}
          <div className={styles.sectionHeader}>
            <h3>
              <FaFire
                className="material-symbols-outlined"
                style={{ color: "#da291c" }}
              />
              Top Rated
            </h3>

            {videoCollection.length > 4 && (
              <a
                href="#"
                onClick={toggleViewAll}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                {isViewAll ? "Show less" : "View all"}
                {isViewAll ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaArrowRight size={14} />
                )}
              </a>
            )}
          </div>

          <div className={styles.grid}>
            {visibleVideos.map((video) => (
              <div
                key={video.id}
                className={styles.videoCard}
                onClick={() => handleVideoSelect(video)}
              >
                <div className={styles.cardThumb}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <img
                      src={getYouTubeThumbnail(video.id)}
                      alt={video.title}
                    />

                    <div className={styles.playIconSmall}>
                      <FaPlay className="material-symbols-outlined" />
                    </div>
                    {video.duration && (
                      <span className={styles.cardDuration}>
                        {video.duration}
                      </span>
                    )}

                    {currentHeroVideo.id === video.id && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          border: "4px solid #da291c",
                          borderRadius: "0.5rem",
                          pointerEvents: "none",
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <h4
                  className={`${styles.cardTitle} ${
                    currentHeroVideo.id === video.id ? styles.activeText : ""
                  }`}
                >
                  {video.title}
                </h4>
                <p className={styles.cardDesc}>{video.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCollectionModal;
