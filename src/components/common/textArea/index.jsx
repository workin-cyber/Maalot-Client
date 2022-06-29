import styles from './style.module.css'

// Creator : Team 1 - Avi
function TextArea(props) { // ------------- yoda work -------------  
    return <div className={`${styles.textAreaInputDiv} ${props.sizStyleInput}`}>
        <label className={`${styles.labelStyleTextArea} ${props.labelStyle}`}>{props.description } </label>
        <textarea onChange={props.onChange} className={`${styles.textAreaInput} ${props.sizStyleInput}`} name={props.name} placeholder={props.placeholder || ''}>
        </textarea>
    </div >
}


export default TextArea