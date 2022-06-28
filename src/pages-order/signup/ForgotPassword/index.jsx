import InputTypes from '../../../components/common/inputTypes'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import styles from './style.module.css'
import { useState } from 'react'

// Creator : Team 3 - yossi
function ForgotPassword(){
    const[form,setForm]=useState()
    function change(e){
        setForm({...form,[e.target.name]:e.target.value
        })

    }
    
    function submit(e){

        e.preventDefault()
        console.log(form);
        e.target.reset()
    }
    return (<>
    <div className={styles.div}>
    
        <h2 className={styles.h2}>
            Forgot your password?</h2>
        <p className={styles.p} >
            Forgot your password?
Enter your email id and we will share a link <br/> to create a new password</p>
        
    <form onSubmit={submit} >
    <InputTypes 
    onChange={change}
    type ="Email" description="Email id" name="Email"/>
    <div className={styles.divbutton}>
    < Button_w140_w383_Link type="submit" text="send" 
    />
    </div>
    </form>
    </div>
    </>)
}


export default ForgotPassword