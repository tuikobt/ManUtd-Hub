import React from "react";
import styles from "./HomePage.module.scss";

import Header from "../components/layout/Header/Header";
import HeroSection from "../components/home/HeroSection/HeroSection";
import NextMatchBar from "../components/home/NextMatchBar/NextMatchBar";
import HistorySection from "../components/home/HistorySection/HistorySection";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <HeroSection />
        <NextMatchBar />
        <HistorySection />
      </main>
    </div>
  );
};

export default HomePage;
