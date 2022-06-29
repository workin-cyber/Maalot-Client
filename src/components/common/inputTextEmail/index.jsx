
import styles from './style.module.css'

// Creator : Team 1 - Avi
function InputTextEmail(props){ //------------- politi work -------------     to defain a type insert the name of the type in props and set the description as first name or last name ac... 

   return  <>  <div className={`${styles.inputDiv} ${props.sizStyleDiv}`}> 
    <label className={`${styles.labelStyle} ${props.labelStyle} `}>{props.description} </label> 
    <input name={props.name}  type={props.type} placeholder={props.placeholder || ''} className={`${styles.inputEara} ${props.sizStyleInput}`} onChange={props.onChange}/>
    </div> </> 
    
}
// to select type of input enter props.type {'password', 'text' , 'email'}
// to select label text enter props.description {'first name', 'email' , 'phone'}

export default InputTextEmail