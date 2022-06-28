import styles from './style.module.css';
import { Line } from 'react-chartjs-2';
import DashboardButton from './dashbordButtons/dashbordButton';
import SelectButton from './dashbordButtons/selectButton';
import {useState} from 'react'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js"
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)
// Creator : Team 6 - Roi
//לייבל מתקבל מהאינדקס כדי לקבוע את תצורת הזמן 


//
function DashbordChrt(props) {
  const data = {
    labels: props.labels,
    datasets: [{
      label: props.label,
      data: props.data,
      borderColor: 'orange',
      borderWidth: 1.5,
      tension: 0.7,
    }]
  }
  // state - data - משתנה בעת לחיצה כפתור
  // useEffect - data - שמשפיעה על הגרף
  // state - range  - משתנה בהתאם לזמן
  // useEffect - state-range >> מפלטר את ה-data
  const [isClicked, setisClicked] = useState(0)


  return <>
    <div className={styles.purple}>
      <div className={styles.backBord}>
        <DashboardButton isClicked={isClicked === 0} onClick={() => setisClicked(0)} num="80" type="WPM" data="Assasment" />
        <DashboardButton isClicked={isClicked === 1} onClick={() => setisClicked(1)} num="8" type="LPM" data="Reading" />
        <DashboardButton isClicked={isClicked === 2} onClick={() => setisClicked(2)} num="50" type="CM" data="Focus" />
        <SelectButton />
        <div className={styles.chart}> <Line data={data}  ></Line></div>
      </div>
    </div>
  </>
}



export default DashbordChrt