import styles from './style.module.css'

// Creator : Team 4 - yaakov_elos
function SpeedLimit({numberLPM}) {
    return <>
        <div className={styles.screen}><h2>{numberLPM}</h2>
            <div className={styles.info}>LPM</div>
        </div>
    </>
}


export default SpeedLimit