import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div className={styles.main}>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <div>
        <button className={styles.connect} onClick={connectWithMetamask}>Connect Wallet.</button>
        <p>
        <div className={styles.details}>
           You need Chrome to be
            <br /> able to run this app.
        </div>
        </p>
         </div>
      )}
    </div>
  );
}
