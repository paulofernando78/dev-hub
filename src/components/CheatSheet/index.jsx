import styles from "./styles.module.css";

export default function CheatSheet() {
  return (
    <div className={`container line-break ${styles["background"]}`}>
      <h2>KICK OFF</h2>
      <div className="line-break">
        <p>
          <b>VS Code</b>
        </p>
        <p>Alt + Z (toogle word wrap)</p>
        <div>
          <p>Install important extensions</p>
          <p>• htmltagwrap</p>
          <p>• ESLint</p>
          <p>• HTMLHint</p>
          <p>• Snippet Creator???</p>
        </div>
      </div>
      <hr></hr>
      <div className="line-break">
        <p>
          <b>Git / Git Hub</b>
        </p>
        <p>Basic lines</p>
        <div>
          <p>git add .</p>
          <p>git commit -m "first commit"</p>
          <p>git push</p>
        </div>
      </div>
    </div>
  );
}
