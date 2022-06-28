import StartButton from "../common/ButtonStart"
import Movies from "../common/Movies"
import PopUp from "../common/PopUp"
import styles from "./styles.css"
import dv from "../common/Movies/a.mov"
import ConvergesExercise from "../../pages-order/trainFocus/ConvergesExercise"
import ResultSummary from "../../pages-order/trainFocus/ResultSummary"
import DivCompicated from "../common/DivCompicated"
import StartFooter from "../common/StartFooter"

function Test() {
    return <>
        {/* <ConvergesExercise /> */}
        {/* <ResultSummary /> */}
        {/* <PopUp question="do you" /> */}
        <Movies video={dv} />
        {/* <StartFooter /> */}
    </>
}

export default Test