import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className="flex">
        <span className="material-symbols-outlined">menu</span>
        <h1 className={styles["header-title"]}>Dev Hub</h1>
      </div>
    </header>
  );
}
