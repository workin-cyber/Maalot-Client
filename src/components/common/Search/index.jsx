import styles from './style.module.css'
import { VscSearch } from "react-icons/vsc";
import { useState } from 'react';


// Creator : Team 2 - ari
function Search(props) {
   const[inputtext,Setinputtext]=useState([])
   
   function inputfunc(e){
   let context= e.target.value
   
   Setinputtext(context)
   {console.log(inputtext)}
   }

    return <>
        <div>
            <input type="search" placeholder='search' className={styles.search} onChange={inputfunc} />
            <VscSearch className={styles.button}/>
        </div>


    </>
}


export default Search