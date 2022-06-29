import styles from "./style.module.css";
import InputTypes from "../../../components/common/inputTypes";
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
// Creator : Team 4 - yaakov goldman
function Questions() {
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
          />
          <InputTypes
            description="What can you say about the theme of the story?"
            type="textarea"
          />
          <InputTypes 
            description="Why do you think the author wrote this book?"
            type="textarea"
          />
          <InputTypes
            description="What do you think is going to happen?"
            type="textarea"
          />
        </div>
        <div >
          <Button_w140_w383_Link text="Done" />
        </div>
      </div>
    </>
  );
}

export default Questions;
