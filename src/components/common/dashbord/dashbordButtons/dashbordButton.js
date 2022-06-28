import styles from './style.module.css'

// Creator : Team 6 - nachman
function DashboardButton(props) {
    const isClicked = props.isClicked
    return <>
        <button className={isClicked ? `${styles.active}
         ${styles.buttonStyle}` : `${styles.notActive}
          ${styles.buttonStyle}`} onClick={() => {
                console.log("blabla")
                return props.onClick()
            }}>

            <div className={styles.textDiv}><div>
                <span className={isClicked ? `${styles.activeButton} ${styles.buttonText}` :
                    `${styles.notActiveButton} ${styles.buttonText}`}
                >{props.num}</span>

                <span className={isClicked ? `${styles.activeButton} ${styles.type}` :
                    `${styles.notActiveButton} ${styles.type}`}
                >{props.type}</span></div>

                <div className={isClicked ? `${styles.activeButton}
                 ${styles.data}` : `${styles.data}`}
                >{props.data}</div> </div>
        </button>
    </>
}


export default DashboardButton