import styles from './style.module.css'

//צריך להשלים את החיבור בין הסלקט לדשבורד כדי שתשתנה תצורת הזמן

function SelectButton(props) {

    function returnSelect() {
        let select = document.getElementById('select_time');
        let value = select.value;
        props.setDate(value);
    }


    return <>
        <label for="select time"></label>
        <select name="time" id="select_time" onChange={returnSelect} className={styles.SelectButton}>
            <option value="0">LAST WEEK</option>
            <option value="1" >LAST MONTH</option>
            <option value="2" >LAST YEAR</option>
        </select>

    </>
}



export default SelectButton