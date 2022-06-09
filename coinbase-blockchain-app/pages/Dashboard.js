import React from "react";
import Header from "../componenets/Header";
import styles from "../styles/Home.module.css";

const Dashboard = ({ address }) => {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.MainContainer}>
        <Header></Header>
      </div>
    </div>
  );
};

export default Dashboard;
