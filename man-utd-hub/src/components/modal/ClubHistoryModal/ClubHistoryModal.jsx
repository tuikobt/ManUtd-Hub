import React from "react";
import styles from "./ClubHistoryModal.module.scss";
import { MdHistoryEdu } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";
import { MdFlightLand } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const TIMELINE_EVENTS = [
  {
    year: "1878",
    title: "Newton Heath LYR",
    desc: "Humble origins from the railway workers' team at Newton Heath. The original colors were Green and Gold.",
    icon: <IoMdTrain />,
  },
  {
    year: "1958",
    title: "Munich Air Disaster",
    desc: "The darkest day in the club's history. 8 players and 3 staff perished, but the spirit of the 'Busby Babes' lives on forever.",
    icon: <MdFlightLand />,
  },
  {
    year: "1999",
    title: "The Historic Treble",
    desc: "The pinnacle of glory under Sir Alex Ferguson, winning the Premier League, FA Cup, and Champions League in 10 extraordinary days.",
    icon: <MdEmojiEvents />,
  },
  {
    year: "2013",
    title: "End of the Ferguson Era",
    desc: "After 26 years and 38 trophies, Sir Alex retired, leaving behind a massive legacy and a significant challenge for his successors.",
    icon: <MdWorkspacePremium />,
  },
];

const ClubHistoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {/* --- HEADER --- */}
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerIcon}>
              <MdHistoryEdu />
            </div>
            <div>
              <h2 className={styles.headerTitle}>Club History</h2>
              <p className={styles.headerSub}>Manchester United Legacy</p>
            </div>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <IoClose />
          </button>
        </header>

        {/* --- SCROLLABLE BODY --- */}
        <div className={styles.body}>
          {/* HERO BANNER */}
          <div
            className={styles.hero}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(34, 16, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsr8q-w55OQtiZK-st8Ex9ZA4Yjinbg8u0JvtM-Fmwk7yJZQylWZJaTvilYhBiNOpH9OH4g5e9UnemcZrnV0SsJipML4zxtOcNZZMttbcFXGzdrQs9CavtT3IPd29St0ABemsXtMKrEHxHZMaXr_lVaLNVzbSFjO3w8ZfujlySSLWrNPS_PmCgOCItSptyPq_Q22ws8fibjSkG-7PeQ470hb6oQMnv8ny-1P-wO-VGtl2r0q3pSZ2VcA9-Xu1uEYzeXHZrUR_CfuY")`,
            }}
          >
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Legendary</span>
              <h1 className={styles.heroTitle}>From 1878 to Present</h1>
              <p className={styles.heroDesc}>
                Our journey is not just about football. It is a story of glory,
                tragedy, and the most powerful resurgence in sports history.
              </p>
            </div>
          </div>

          <div className={styles.contentWrapper}>
            {/* INTRO */}
            <div className={styles.introText}>
              <p>
                Manchester United is one of the most successful and famous
                football clubs in the world. Founded in 1878 as Newton Heath LYR
                Football Club, the team was renamed Manchester United in 1902
                and moved to Old Trafford in 1910.
              </p>
            </div>

            {/* TIMELINE SECTION */}
            <div className={styles.timelineSection}>
              <h3 className={styles.sectionTitle}>
                <MdOutlineTimeline className="material-symbols-outlined" />
                Historical Milestones
              </h3>

              <div className={styles.timelineGrid}>
                {TIMELINE_EVENTS.map((event, index) => (
                  <React.Fragment key={index}>
                    {/* Column 1: Marker & Line */}
                    <div className={styles.tlMarkerCol}>
                      {/* Top line for first item visual fix */}
                      {index > 0 && (
                        <div
                          className={styles.tlLine}
                          style={{ minHeight: "16px", flexGrow: 0 }}
                        ></div>
                      )}

                      <div className={styles.tlIconBox}>
                        <span className="material-symbols-outlined">
                          {event.icon}
                        </span>
                      </div>

                      {/* Connecting line (except for last item) */}
                      {index < TIMELINE_EVENTS.length - 1 && (
                        <div className={styles.tlLine}></div>
                      )}
                    </div>

                    {/* Column 2: Content */}
                    <div className={styles.tlContentCol}>
                      <p className={styles.tlYear}>{event.year}</p>
                      <p className={styles.tlTitle}>{event.title}</p>
                      <p className={styles.tlDesc}>{event.desc}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className={styles.divider}></div>

            {/* ERA DETAIL (Sir Alex) */}
            <div className={styles.eraSection}>
              <h2 className={styles.eraHeader}>The Sir Alex Ferguson Era</h2>
              <div className={styles.eraWrapper}>
                <div className={styles.eraImageCol}>
                  <div
                    className={styles.eraImage}
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF0rpA3T2AdpKCtqRkT60d1gNgAgQGrx9QhZah2XgiA2gA9mrEgpBMA_SallnzVTfmGm0BqJTlFduilfp8b5Fe6lz3fTSPzLlLoMj7Wt_ikwNcBhMO8GyO4pmrFWyFoejK45kH0PYzJRwRdungwt51fIZL1LCopdrx0iBC1PiJKlYypBecqX2YePJM2jdHFXjUhUrKyHJLDd8kkDCgfAT4gSRloj5k57KY5aRHmLG8L14-P84oRw-9rq02NRAaBwxU2VrqCDcetrk")`,
                    }}
                  ></div>
                  <p className={styles.eraCaption}>
                    Sir Alex Statue at Old Trafford
                  </p>
                </div>

                <div className={styles.eraTextCol}>
                  <p className={styles.eraPara}>
                    Under the leadership of Sir Alex Ferguson, Manchester United
                    dominated English football for over two decades. He arrived
                    in 1986 when the club was struggling and rebuilt it from the
                    ground up, focusing on youth development and iron
                    discipline.
                  </p>
                  <p className={styles.eraPara}>
                    His greatest achievement was winning 13 Premier League
                    titles, 5 FA Cups, and 2 UEFA Champions League titles.
                    Notably, the 1998-1999 season saw United become the first
                    and only English team to win the Treble.
                  </p>

                  <div className={styles.statsBox}>
                    <p className={styles.statsTitle}>Key Statistics</p>
                    <ul className={styles.statsList}>
                      <li>
                        <FaCheck
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        />
                        13 x Premier League
                      </li>
                      <li>
                        <FaCheck
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        />
                        2 x Champions League
                      </li>
                      <li>
                        <FaCheck
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        />
                        1,500 matches managed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHistoryModal;
