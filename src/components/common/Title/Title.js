import styles from "./style.module.css";

export default function Title(props) {
  return <h1 className={styles.h1}>{props.title}</h1>;
}
