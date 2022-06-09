import React from "react";
import styles from "../styles/Home.module.css";

const Dashboard = ({ address }) => {
  return <div className={styles.textColor}>{address}</div>;
};

export default Dashboard;
