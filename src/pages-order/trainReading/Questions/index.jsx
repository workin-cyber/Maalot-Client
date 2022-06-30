import styles from "./style.module.css";
import InputTypes from "../../../components/common/inputTypes";
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
import { useNavigate, useLocation } from "react-router-dom";

// Creator : Team 4 - yaakov goldman
function Questions() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const answers = [];
  const readVal = (e, index) => (answers[index] = e.target.value);

  const navigatePage = () => {
    data.arrAnswer.push({type: (data.arrAnswer.length)?"p":"l",answers});
    navigate((data.arrAnswer.length<5)?"/student/trainreading/Pushup1A":"/student/level-exercise/ResultSummaryL", { state: { data } });
  };

  return (
    <>
      <h1>title</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        eaque, facilis necessitatibus ea maiores aut exercitationem? Reiciendis
        explicabo recusandae earum repellendus ipsum magni nihil architecto
        incidunt, error quod vero iste!
      </p>
      <div className={styles.buttonandIndput}>
        <div>
          <InputTypes
            description="Who is the main character?"
            type="textarea"
            onChange={(e) => readVal(e, 0)}
          />
          <InputTypes
            description="What can you say about the theme of the story?"
            type="textarea"
            onChange={(e) => readVal(e, 1)}
          />
          <InputTypes
            description="Why do you think the author wrote this book?"
            type="textarea"
            onChange={(e) => readVal(e, 2)}
          />
          <InputTypes
            description="What do you think is going to happen?"
            type="textarea"
            onChange={(e) => readVal(e, 3)}
          />
          {/* {console.log(answers)} */}
        </div>
        <div>
          <Button_w140_w383_Link text="Done" onClick={navigatePage} />
        </div>
      </div>
    </>
  );
}

export default Questions;
