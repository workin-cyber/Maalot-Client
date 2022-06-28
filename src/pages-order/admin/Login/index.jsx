import styles from './style.module.css'
import DivCompicated from '../../../components/common/DivCompicated'
import InputTypes from '../../../components/common/inputTypes'
import { Link } from 'react-router-dom'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import Title from '../../../components/common/Title/Title'
import { useState } from 'react'

// Creator : Team 1 - Avi 
// avi work

function AdminLogIn() {
    const [inputs , setInputs] = useState({})
    function singInButtonHendler(e){
        setInputs({...inputs,[e.target.name]:e.target.value})

    }
    return <>
    <div className={styles.mainDivLogIn}>
        <div className={styles.title}>

<Title title={"Welcome back!"}/>
        </div>
        <div className={styles.bigDiv}>
            <DivCompicated isLeft={true} classInternal={styles.frontDiv} >
        <form onSubmit={(e)=>{e.preventDefault();e.target.reset();console.log(inputs);}}>
                <InputTypes type={'email'} description={'email id'} name={'email'} onChange={singInButtonHendler}/>
                <InputTypes type={'password'} description={'passwrord'} name={'password'} onChange={singInButtonHendler} />
                <div className={styles.linkDiv}>
                <Link to={'/test'} className={styles.forgatPassword}><span className={styles.forgetPass}>forgat password?</span> </Link>
                </div>
                <div className={styles.buttonDiv}>
                    
                <Button_w140_w383_Link text={'sing in'} type={'submit'}/>
                </div>
        </form>
            </DivCompicated>
        </div>
    </div>

    </>
}
export default AdminLogIn