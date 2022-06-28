import styles from './style.module.css'
import InputTypes from '../../../components/common/inputTypes'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import Beackground from '../../../components/common/SignWithGoogle/Beackground'

import { Link }from "react-router-dom"
// Creator : Team3 - netanel mahrabi
function SignIn(props){
    return <div className={styles.all}>
    <h2>welcome back!</h2>
    <p>Don't have an account?<Link to="signup">sign up</Link></p>
    <form>
        <InputTypes type="text"/>
        <InputTypes type="password"/>

        <div className={styles.button}>
            <Button_w140_w383_Link text="sign in"/>
            </div>


    </form>
    <Beackground />
    </div>
}


export default SignIn