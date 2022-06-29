import { Link } from "react-router-dom";
import styles from "./style.module.css";

// Creator : Team 3 - Shlomi
// button/Link, big/small, orange/white
// default: button,big,orange
// send text="text"
// for Link: send href in props
// for button: send function onClick= func
// for submit: type=submit
// for white: send white=true in props
// for small: send small=true in props
// to add className send class="class"

function Button_w140_w383_Link(props) {
    return <>

        {props.href ?
            <Link
                to={`${props.href}`}>
                <div className={`${styles.Button}  ${props.white ? styles.White : ""} ${props.small ? styles.small : ""}`}>
                    <span className={styles.text}>{props.text}</span>
                </div>
            </Link>
            : <button
                className={`${styles.Button} ${props.white ? styles.White : ""} ${props.small ? styles.small : ""}`}
                onClick={props.onClick}>
                <span className={styles.text}>{props.text}</span>
            </button>}
    </>
}

export default Button_w140_w383_Link;
