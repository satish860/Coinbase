import React from "react";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>Assets</div>
      <div className={styles.buttonsContainer}>
        <div className={styles.headerbuttons} style={{ backgroundColor: '#3773f5', color: '#000' }}>Buy/Sell</div>
        <div className={styles.headerbuttons}>Send / Receieve</div>
      </div>
    </div>
  );
};

export default Header;
