import styles from "./styles.module.css";

export default function Snippet({ children }) {
  return (
    <>
      <section className="container">
        {/* Text */}
        <p>{children}</p>
        {/* HTML */}
        <div className={styles["flex-snippet"]}>
          <div>
            <div className="html">HTML</div>
            <div></div>
          </div>
          {/* CSS */}
          <div>
            <div>CSS</div>
            <div>
              <pre>
                <code></code>
              </pre>
            </div>
          </div>
          {/* JS */}
          <div>
            <div>JS</div>
            <div>
              <pre>
                <code></code>
              </pre>
            </div>
          </div>
          {/* React */}
          <div>
            <div>React</div>
            <div>
              <pre>
                <code></code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
