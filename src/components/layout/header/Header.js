import Title from "../../common/Title/Title"
import { TitleTow } from "../../common/Title/TitleTow/TitleTow"
import { FaUserCircle } from "react-icons/fa"
import styles from "./style.module.css";
import { useContext } from "react";
import { MainContext } from "../../../context/MainContex";




export default function Header(props) {

   const { headerName } = useContext(MainContext)

   return <header className={styles.headerUser}>
      <div className={styles.nav} onClick={() => { props.setIsNav(true); props.setIsNavClosed(false) }}></div>
      <h2>{headerName ?? ""}</h2>
      <button onClick={() => { if (props.navFn) props.imgFn() }} style={props.img ? { backgroundImage: `url(${props.img})` } : {}} className={styles.buttonImg} type='button'>{props.img ? "" : <FaUserCircle />}</button>
   </header>
}