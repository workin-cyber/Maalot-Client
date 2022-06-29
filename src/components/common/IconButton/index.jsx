import styles from './style.module.css'

// Creator : Team C - netanel machrabi
//default diraction right for left send isLeft={true}
//send function in props to event onClick=function
//send text in props text={text}
//send icon in props icon={icon}
function IconButton(props){
    return <div  className={`${styles.bacgroundDiv} ${props.isLeft?styles.left:""}`}>
    <button onClick={props.onClick} className={`${styles.IconButton} ${props.isLeft?styles.iconLeft:""}`}  ><div className={styles.icon}> {props.icon}</div>{props.text}</button>
    </div>
}


export default IconButton