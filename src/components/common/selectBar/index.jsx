
import styles from './style.module.css'
import React, { Component } from 'react'


// Creator : Team 1 -Avi
function SelectComponent(props) { // ------------- bentsi work ------------- 
    // 1.   enter props.labelText  = {string} props to put text in label
    // 2.   enter props.optionArry = {array} array of option in select
    // 3.   enter props.firstInfo =  {string} to show the first info in a select bar
    // 4.   enter props.sizStyleDiv = {style.module.css} to change div style size  !-!-! you most change input style as well in props number 5
    // 5.   enter props.sizStyleInput = {style.module.css} to change input style size !-!-! you most change div style as well in props number 4
    // 6.   enter props.onChange  = {function(e)} to get input value (e.target.value)
    // 7.   enetr props.labelStyle = {style.module.css} to change lable style size
    const optionArry = props.optionArry ? props.optionArry : []

    //מחזיר לולאה אופשן של הערך הראשוניו את רשימת השלבים
    return <>
        <div className={`${styles.inputDiv} ${props.sizStyleDiv}`}>
            <label className={`${styles.labelStyle} ${props.labelStyle}`}> {props.labelText ? props.labelText : 'enter props labelText'}</label>
            <select className={`${styles.selectInput} ${props.sizStyleInput}`} name={props.name} onChange={props.onChange}>
                <option className={styles.optionStyle} value="none" selected disabled hidden>{props.firstInfo ? props.firstInfo : 'enter props.firstInfo'}</option>
                {optionArry.map((val) => (
                    <option className={styles.optionStyle} value={val} key={val}>{val}</option>
                ))}
            </select>

        </div>
    </>
}

export default SelectComponent