import styles from "./styles.module.css";

export default function Nav() {
  return (
    <>
      <ul className={`container ${styles["nav"]}`}>
        <li>Text</li>
        <li>Abbreviation</li>
        <li>Border</li>
        <li>Border Animation</li>
        <li>Button (Show/Hide)</li>
        <li>Center a &altdiv&gt</li>
      </ul>
    </>
  );
}
