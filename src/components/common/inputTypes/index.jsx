import TextArea from "../textArea";
import PassInput from "../passwordInput";
import InputTextEmail from "../inputTextEmail";
// Creator : Team 1 - Avi 

//main frame work 

function InputTypes(props) { // ------------- avi work ------------- 
    // 1. enter props.description = {'string'} description: to do label text
    // 2. enter props.type = {'string'} type: to selcet input type { includs !!! textarea }
    // 3. enter props.name = {'string'} to do name
    // 4. enter props.onChange  = {function(e)}  to get input value (e.target.value)
    // 5. enter props.sizStyleDiv = {style.module.css} to change div style size  !-!-! you most change input style as well in props number 6
    // 6. enter props.sizStyleInput = {style.module.css} to change input style size !-!-! you most change div style as well in props number 5
    // 7. enter props.placeholder = {string} to anter placeholder in input
    // 8. enetr props.labelStyle = {style.module.css} to change lable style size
    const type = props.type
    if (type == 'password')
        return <PassInput {...props} />

    else if (type == 'text' || 'email' || 'tel' || 'date' || 'number')
        return <InputTextEmail {...props} />

    else if (type == 'textarea')
        return <TextArea {...props} />

    else
        return <></>
}
export default InputTypes