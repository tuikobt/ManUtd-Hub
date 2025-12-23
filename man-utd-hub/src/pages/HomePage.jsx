import React from "react";
import styles from "./HomePage.module.scss";

import Header from "../components/layout/Header/Header";
import HeroSection from "../components/home/HeroSection/HeroSection";
import NextMatchBar from "../components/home/NextMatchBar/NextMatchBar";
import HistorySection from "../components/home/HistorySection/HistorySection";
import LegendsSection from "../components/home/LegendsSection/LegendsSection";
import Footer from "../components/layout/Footer/Footer";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <HeroSection id="hero" />
        <NextMatchBar />
        <HistorySection id="history" />
        <LegendsSection id="legends" />
      </main>
      <Footer id="community" />
    </div>
  );
};

export default HomePage;
