import DivCompicated from '../DivCompicated'
import styles from './style.module.css'
import Group from "./Group.svg"
import { useEffect, useRef, useState } from 'react'
import StartButton from '../ButtonStart';

// Creator : Team 5 - Nati Shanker
function Movies(props) {
    const [isPlayed, setIsPlayed] = useState(false)
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.src = props.video
    }, []);

    return <DivCompicated classAll={styles.all} classBack={styles.back} classInternal={styles.internal} isLeft={true}>
        <video onEnded={() => { setIsPlayed(false) }} onClick={() => { setIsPlayed(false); videoRef.current.pause() }} ref={videoRef} className={`${styles.video} ${styles.internal} ${isPlayed ? styles.played : ""}`} />
        {!isPlayed ? <StartButton classButton={styles.button} onclick={() => { setIsPlayed(!isPlayed); videoRef.current.play() }} /> : ""}
        <div className={styles.img}></div>
    </DivCompicated>

}


export default Movies