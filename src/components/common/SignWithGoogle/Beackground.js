//creator team 2 motty levi
import styles from "../SignWithGoogle/style.module.css";
import Button from "./Button";
import img from "../SignWithGoogle/pencil.svg";

function Beackground(props) {
  return (
    <div className={styles.Beackground}>
      <img className={styles.pencil} src={img} />
      <Button onClick={props.onClick} />
    </div>
  );
}
export default Beackground;
