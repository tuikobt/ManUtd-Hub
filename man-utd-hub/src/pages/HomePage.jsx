import React from "react";
import styles from "./HomePage.module.scss";

import Header from "../components/layout/Header/Header";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
