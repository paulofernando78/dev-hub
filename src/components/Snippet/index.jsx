import styles from "./styles.module.css";

export default function Snippet({ children }) {
  return (
    <>
      <section className={styles["container-snippet"]}>
        {/* Text */}
        <p>{children}</p>
        {/* HTML */}
        <div className={styles["flex-snippet"]}>
          <div>
            <div className={styles["html"]}>HTML</div>
            <div className={styles["pre"]}>
              <pre>
                <code>teste</code>
              </pre>
            </div>
          </div>
          {/* CSS */}
          <div>
            <div className={styles["css"]}>CSS</div>
            <div>
              <pre className={styles["pre"]}>
                <code>teste</code>
              </pre>
            </div>
          </div>
          {/* JS */}
          <div>
            <div className={styles["js"]}>JS</div>
            <div>
              <pre className={styles["pre"]}>
                <code>teste</code>
              </pre>
            </div>
          </div>
          {/* React */}
          <div>
            <div className={styles["react"]}>React</div>
            <div>
              <pre className={styles["pre"]}>
                <code>teste</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
