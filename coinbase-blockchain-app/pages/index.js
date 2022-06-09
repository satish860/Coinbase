import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Dashboard from "./Dashboard";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div className={styles.main}>
      {address ? (
        <Dashboard address={address}></Dashboard>
      ) : (
        <div>
          <button className={styles.connect} onClick={connectWithMetamask}>
            Connect Wallet.
          </button>

          <div className={styles.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
