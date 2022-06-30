import styles from "./style.module.css";
import InputTypes from "../../../components/common/inputTypes";
import Button_w140_OR_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
import {  useNavigate } from "react-router-dom";


// Creator : Team 4 - all
function BookDetails() {
    const navigate = useNavigate();

  const data = {
    bookName: "",
    genre: "",
    arrAnswer: [],
    lpm: 0,
  };

  const readVal=(e, key)=> data[key] = e.target.value;

  return (
    <>
      <InputTypes description="What Book are you going to read?" type="text" onChange={(e)=>readVal(e,"bookName")} />
      <InputTypes description="Genre?" type="text" onChange={(e)=>readVal(e,"genre")} />
      <div className={styles.button}>
        <Button_w140_OR_w383_Link
        onClick={()=>navigate("/student/trainreading/Pushup1A",{state:{data}})}
          text="Next"
        />
      </div>
      {console.log(data)}
    </>
  );
}

export default BookDetails;
