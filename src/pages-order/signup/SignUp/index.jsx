import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import InputTypes from '../../../components/common/inputTypes'
import Beackground from '../../../components/common/SignWithGoogle/Beackground'
import styles from './style.module.css'

// Creator : Team3 - Shlomi
function SignUp(props){
    const [form,setForm]=useState({})
    const [error,setError]=useState("")
    
    function submit(e) {
        e.preventDefault()
        if(form.ConfirmPassword===form.Password){
            e.target.reset()
            setError("")
        }
        else setError("The passwords are not equal!")
        console.log(form);

    }
    function change(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    return <>
    <div className={styles.all}>
        <div className={styles.head}>

        <h2>Create An Account</h2>
        <p>Already have an account? <Link to={"/signup/signin"}>Sign In</Link></p>
        <img src="" alt="" />
        </div>
        <form onSubmit={submit}>
            <InputTypes onChange={change} className={styles.firstInput} type="text" description="First Name" name="FirstName"/>
            <InputTypes onChange={change} type="text" description="Last Name" name="LastName"/>
            <InputTypes onChange={change} type="email" description="Email" name="Email"/>
            <InputTypes onChange={change} type="password" description="Password" name="Password"/>
            <InputTypes onChange={change} type="password" description="Confirm Password" name="ConfirmPassword"/>
            <p className={styles.error}>{error}</p>
            <span className={styles.submit} >

            <Button_w140_w383_Link type="submit" text="Sign Up"/>
            </span>
        </form>
            <Beackground/>
        
    </div>
    </>
}


export default SignUp