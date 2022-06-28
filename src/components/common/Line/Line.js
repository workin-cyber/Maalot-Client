import styles from "../Line/style.module.css";
import line from "../Line/line.svg";

export default function Line() {
  return (
    <div className={styles.line}>
      <img src={line} />
    </div>
  );
}
