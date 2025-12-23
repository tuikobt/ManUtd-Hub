import React, { useState } from "react";
import styles from "./HomePage.module.scss";

import Header from "../components/layout/Header/Header";
import HeroSection from "../components/home/HeroSection/HeroSection";
import NextMatchBar from "../components/home/NextMatchBar/NextMatchBar";
import HistorySection from "../components/home/HistorySection/HistorySection";
import LegendsSection from "../components/home/LegendsSection/LegendsSection";
import Footer from "../components/layout/Footer/Footer";
import ClubHistoryModal from "../components/modal/ClubHistoryModal/ClubHistoryModal";
import PlayerModal from "../components/modal/PlayerModal/PlayerModal";

const HomePage = () => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setIsPlayerModalOpen(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <HeroSection id="hero" />
        <NextMatchBar />
        <HistorySection
          id="history"
          setIsHistoryModalOpen={setIsHistoryModalOpen}
        />
        <ClubHistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
        />
        <LegendsSection id="legends" onPlayerClick={handlePlayerClick} />
        <PlayerModal
          isOpen={isPlayerModalOpen}
          onClose={() => setIsPlayerModalOpen(false)}
          player={selectedPlayer}
        />
      </main>
      <Footer id="community" />
    </div>
  );
};

export default HomePage;
