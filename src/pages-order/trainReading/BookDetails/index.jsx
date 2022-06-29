import styles from './style.module.css'
import InputTypes from "../../../components/common/inputTypes"
import Button_w140_OR_w383_Link from  "../../../components/common/Button w140-OR-w383 Link" 

// Creator : Team 4 - all
function BookDetails(){
    return <>
    <InputTypes description="What Book are you going to read?" type="text"/>
    <InputTypes description="Genre?" type="text"/>
    <div className={styles.button}><Button_w140_OR_w383_Link href="/instructions"/></div>
    </>
}


export default BookDetails