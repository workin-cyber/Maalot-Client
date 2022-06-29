import styles from './style.module.css'


// Creator : Team 4 - amichai & yaakov g
function Progressbar({number}) {
 const divsHeight=[8,28,40,28,20,12,30,38,14,34,24,12,12,20,27,7,7,32,20,25]

 return <div className={styles.allBars}>
     {divsHeight.map((height,i)=>{
    return <div key={i} className={(i<number)? `${styles.bar} ${styles.notUse}`:styles.bar} style={{height:`${height}px`}}></div>})
    }
     
 </div>


}


export default Progressbar