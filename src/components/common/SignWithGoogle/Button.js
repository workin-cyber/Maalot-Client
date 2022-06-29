import Styles from "../SignWithGoogle/style.module.css";
import { ImGoogle } from "react-icons/im";
function Button(props) {
  return (
    <button onClick={props.onClick} className={Styles.button}>
      <div className={Styles.textInButton}>
        <ImGoogle className={Styles.ImGoogle} />
        sign up with Google
      </div>
    </button>
  );
}
export default Button;
