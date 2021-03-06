
import { Outlet, Route, Routes } from "react-router-dom"
import Dashboard from "../../pages-order/Dashboard"
import Test from "../test/Test"
import { SignUp, } from "../../pages-order/signup/index"
import { } from "../../pages-order/admin"
import { ResultSummary } from "../../pages-order/firstAssessement"
import { } from "../../pages-order/freeStyle"
import { LevelExercise, ReadingRate, ResultSummaryL } from "../../pages-order/levelExercise/index"
import { } from "../../pages-order/setting"
import { } from "../../pages-order/trainFocus"
import { } from "../../pages-order/trainReading"
import { ConvergesExercise } from "../../pages-order/trainFocus"
import StartRound from "../../pages-order/trainFocus/ConvergesExercise/StartRound"
import Stop from "../../pages-order/trainFocus/ConvergesExercise/Stop"
import ResultSummaryTrainFocus from "../../pages-order/trainFocus/ResultSummary"
// import Test from "../test/Test"
import { BookDetails, Pushup1A, Pushup1B, Pushup4B, Questions } from "../../pages-order/trainReading"
import Instructions from "../../pages-order/trainReading/Instructions"

function Content(props) {
    return <>
        <Routes>

            {/* sign */}
            <Route path="sign-up" >
                <Route index element={<>sign up</>} />
                <Route path="connect-teacher" element={<>connect teacher</>} />
            </Route>

            {/* student */}
            <Route path="/student" element={<><Outlet /></>}>
                <Route path="dashboard" element={<Dashboard setIsHeader={props.setIsHeader} />} />

                <Route path="train-focus">
                    <Route index element={<ConvergesExercise />} />
                    <Route path="start-round" element={<StartRound />} />
                    <Route path="start-round/stop" element={<Stop />} />
                    <Route path="result-summary" element={<ResultSummaryTrainFocus />} />
                    {/* <Route path="exercise" element={< />} /> */}

                </Route>

                <Route path="first-assessement">
                    <Route index element={<>firstAssessementn</>} />
                </Route>

                <Route path="free-style">
                    <Route index element={<>free style</>} />
                </Route>

                <Route path="level-exercise">
                    <Route index element={<LevelExercise />} />
                    <Route path="ReadingRate" element={<ReadingRate />} />
                    <Route path="ResultSummaryL" element={<ResultSummaryL />} />
                </Route>

                <Route path="setting">
                    <Route index element={<>setting</>} />
                </Route>

                <Route path="trainReading">
                    <Route index element={<BookDetails />} />
                    {/* <Route path="Instructions" element={<Instructions/>}/> */}
                    <Route path="Pushup1A" element={<Pushup1A />} />
                    <Route path="Pushup1B" element={<Pushup1B />} />
                    <Route path="Questions" element={<Questions />} />
                    <Route path="Pushup4B" element={<Pushup4B />} />
                </Route>


            </Route>


            {/* admin - desktop*/}
            <Route path="/admin" element={<><h1> protected - route - admin  </h1><Outlet /></>}>
                <Route path="add-remove-teacher" element={<>add-remove-teacher</>} />
            </Route>

            {/* <Route path='/test' element={<Test />} /> */}
        </Routes>
    </>
}

export default Content