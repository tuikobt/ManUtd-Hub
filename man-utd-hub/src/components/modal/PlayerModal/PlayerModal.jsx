import React, { useState } from "react";
import styles from "./PlayerModal.module.scss";

import { IoClose } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { LuTrophy } from "react-icons/lu";

import {
  MdEmojiEvents,
  MdPublic,
  MdLocalActivity,
  MdWineBar,
  MdMilitaryTech,
  MdSportsSoccer,
  MdHistoryEdu,
  MdEdit,
  MdMuseum,
  MdGroups,
  MdChildCare,
  MdMic,
} from "react-icons/md";
import { LuStar, LuTrophy as LuTrophyIcon, LuShield } from "react-icons/lu"; // Alias LuTrophy để tránh trùng
import { GiFootTrip } from "react-icons/gi";

// 3. TẠO MAPPING OBJECT
const iconMapping = {
  MdEmojiEvents: MdEmojiEvents,
  MdPublic: MdPublic,
  MdLocalActivity: MdLocalActivity,
  MdWineBar: MdWineBar,
  MdMilitaryTech: MdMilitaryTech,
  MdSportsSoccer: MdSportsSoccer,
  MdHistoryEdu: MdHistoryEdu,
  MdEdit: MdEdit,
  MdMuseum: MdMuseum,
  MdGroups: MdGroups,
  MdChildCare: MdChildCare,
  MdMic: MdMic,
  LuStar: LuStar,
  LuTrophy: LuTrophyIcon,
  LuShield: LuShield,
  GiFootTrip: GiFootTrip,
};

// 4. COMPONENT CON ĐỂ RENDER ICON ĐỘNG
const DynamicIcon = ({ name, size = "1em", color }) => {
  const IconComponent = iconMapping[name];
  if (!IconComponent) return null; // Nếu không tìm thấy icon thì không render gì cả
  return <IconComponent size={size} color={color} />;
};

const PlayerModal = ({ isOpen, onClose, player }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen || !player) return null;

  // --- TAB: OVERVIEW ---
  const renderOverview = () => (
    <div className="animate-fade-in">
      <section className={styles.biography}>
        <h3 className={styles.sectionTitle}>
          <MdOutlinePersonOutline />
          Biography
        </h3>
        <p>{player.overview.biography}</p>
      </section>

      <section>
        <h3 className={styles.sectionTitle}>
          <SiSimpleanalytics />
          Career Stats
        </h3>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p>Appearances</p>
            <p>{player.overview.hero_stats.appearances}</p>
          </div>
          <div className={`${styles.statCard} ${styles.highlight}`}>
            <p>Goals</p>
            <p>{player.overview.hero_stats.goals}</p>
          </div>
          <div className={styles.statCard}>
            <p>Assists</p>
            <p>{player.overview.hero_stats.assists}</p>
          </div>
        </div>
      </section>
    </div>
  );

  // --- TAB: STATS ---
  const renderStats = () => (
    <div className="animate-fade-in">
      {/* Table 1: Performance by Competition */}
      <section>
        <h3 className={styles.sectionTitle}>
          <LuTrophy />
          Performance by Competition
        </h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Competition</th>
                <th className={styles.colCenter}>Apps</th>
                <th className={styles.colCenter}>Goals</th>
                <th className={styles.colCenter}>Assists</th>
                <th className={`${styles.colCenter} hidden sm:table-cell`}>
                  Mins/Goal
                </th>
              </tr>
            </thead>
            <tbody>
              {player.stats_tab.by_competition.map((item, idx) => (
                <tr key={idx}>
                  <td className={styles.bold}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* Thay thế thẻ span cũ bằng div bọc DynamicIcon */}
                      <div style={{ display: "flex", color: "#6b7280" }}>
                        <DynamicIcon name={item.icon} size={18} />
                      </div>
                      {item.name}
                    </div>
                  </td>
                  <td className={styles.colCenter}>{item.apps}</td>
                  <td className={`${styles.colCenter} ${styles.bold}`}>
                    {item.goals}
                  </td>
                  <td className={styles.colCenter}>{item.assists}</td>
                  <td className={`${styles.colCenter} hidden sm:table-cell`}>
                    {item.mins_per_goal}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className={styles.bold}>Total</td>
                <td className={`${styles.colCenter} ${styles.bold}`}>
                  {player.stats_tab.summary_cards.total_games}
                </td>
                <td
                  className={`${styles.colCenter} ${styles.bold}`}
                  style={{ color: "#f20d0d" }}
                >
                  {player.stats_tab.summary_cards.total_goals}
                </td>
                <td className={`${styles.colCenter} ${styles.bold}`}>
                  {player.stats_tab.summary_cards.total_assists}
                </td>
                <td className="hidden sm:table-cell"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Table 2: Season History */}
      <section>
        <h3 className={styles.sectionTitle}>
          {/* Icon tĩnh cho tiêu đề */}
          <MdHistoryEdu />
          Season History
        </h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Season</th>
                <th>Club</th>
                <th className={styles.colCenter}>Matches</th>
                <th className={styles.colCenter}>Goals</th>
                <th className={styles.colCenter}>Assists</th>
                <th className={styles.colRight}>Rating</th>
              </tr>
            </thead>
            <tbody>
              {player.stats_tab.season_history.map((season, idx) => (
                <tr key={idx}>
                  <td className={styles.bold}>{season.season}</td>
                  <td>{season.club}</td>
                  <td className={styles.colCenter}>{season.matches}</td>
                  <td className={`${styles.colCenter} ${styles.bold}`}>
                    {season.goals}
                  </td>
                  <td className={styles.colCenter}>{season.assists}</td>
                  <td className={styles.colRight}>
                    <span className={styles.rating}>{season.rating}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  // --- TAB: HONORS ---
  const renderHonors = () => (
    <div className="animate-fade-in">
      {/* Section 1: Club Honors */}
      <section style={{ marginBottom: "40px" }}>
        <h3
          className={styles.sectionTitle}
          style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "8px" }}
        >
          <MdEmojiEvents />
          Club Honors
        </h3>
        <div className={styles.honorsGrid}>
          {player.honors_tab.club_honors.map((honor, idx) => {
            // Xác định màu sắc dựa trên theme
            const themeColor =
              honor.theme === "primary"
                ? "#f20d0d"
                : honor.theme === "blue"
                ? "#2563eb"
                : honor.theme === "amber"
                ? "#d97706"
                : "#16a34a";

            return (
              <div key={idx} className={styles.honorCard}>
                <div className={styles.honorIcon}>
                  {/* Container cho icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DynamicIcon
                      name={honor.icon}
                      size={28}
                      color={themeColor}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "4px",
                    }}
                  >
                    <h4 style={{ fontWeight: "700" }}>{honor.title}</h4>
                    <span className={styles.honorCount}>{honor.count}</span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    {honor.description}
                  </p>
                  <div className={styles.yearTags}>
                    {honor.years.map((year, yIdx) => (
                      <span key={yIdx}>{year}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Individual Honors */}
      <section>
        <h3
          className={styles.sectionTitle}
          style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "8px" }}
        >
          <LuStar />
          Individual Honors
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {player.honors_tab.individual_honors.map((honor, idx) => (
            <div key={idx} className={styles.indivItem}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  className={styles.honorIcon}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DynamicIcon name={honor.icon} size={20} color="#ca8a04" />
                </div>
                <div>
                  <p style={{ fontWeight: "700" }}>{honor.title}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    {honor.subtitle}
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: "#6b7280",
                }}
              >
                {honor.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* --- LEFT PANEL: Image & Overlay --- */}
        <div className={styles.leftPanel}>
          <div
            className={styles.heroImage}
            style={{ backgroundImage: `url('${player.image_url}')` }}
          ></div>
          <div className={styles.gradientOverlay}></div>
          <div className={styles.jerseyNumber}>{player.shirt_number}</div>

          {/* Mobile Text Overlay */}
          <div className={styles.mobileTitle}>
            <h1>{player.name}</h1>
            <p>{player.position}</p>
          </div>

          <button className={styles.closeBtnMobile} onClick={onClose}>
            <IoClose size={24} color="white" />
          </button>
        </div>

        {/* --- RIGHT PANEL: Content --- */}
        <div className={styles.rightPanel}>
          <button
            className={styles.closeBtnDesktop}
            onClick={onClose}
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>

          <div className={styles.scrollContent}>
            {/* Header Info (Desktop) */}
            <div className={styles.headerInfo}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.tag}>Legend</span>
                <span className={styles.playerNum}>#{player.shirt_number}</span>
              </div>
              <h1 className={styles.playerName}>{player.name}</h1>
              <div className={styles.playerMeta}>
                <span>{player.position}</span>
                <span className={styles.dot}></span>
                <span>{player.years_active}</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "overview" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "stats" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("stats")}
              >
                Stats
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "honors" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("honors")}
              >
                Honors
              </button>
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: "300px" }}>
              {activeTab === "overview" && renderOverview()}
              {activeTab === "stats" && renderStats()}
              {activeTab === "honors" && renderHonors()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
