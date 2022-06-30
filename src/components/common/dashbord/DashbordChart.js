import styles from './style.module.css';
import { Line } from 'react-chartjs-2';
import DashboardButton from './dashbordButtons/dashbordButton';
import SelectButton from './dashbordButtons/selectButton';
import { useState } from 'react'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js"
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)
// Creator : Team 6 - Roi
//לייבל מתקבל מהאינדקס כדי לקבוע את תצורת הזמן 

function DashbordChart(props) {

  const [isClicked, setisClicked] = useState(0);
  const [date, setDate] = useState("0");

  function changeDate() {
    if (date === "0") return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    if (date === "1") return ["WEEK A", "WEEK B", "WEEK C", "WEEK D"]
    if (date === "2") return ["JUN", "FEB", "MRC", "APR", "MAY", "JUNE", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  }

  function changeDataNum() {
    if (isClicked === 0) return [10, 20, 30, 40, 30, 20, 10]
    if (isClicked === 1) return [70, 79, 35, 100]
    if (isClicked === 2) return [200, 150, 100, 67, 56]
  }

  const data = {
    labels: changeDate(),
    datasets: [{
      label: props.label,
      data: changeDataNum(),
      borderColor: 'orange',
      borderWidth: 1.5,
      tension: 0.7,
    }]
  }
  return <>
    <div className={styles.purple}>
      <div className={styles.backBord}>
        <DashboardButton isClicked={isClicked === 0} onClick={() => setisClicked(0)} num="80" type="WPM" data="Assasment" />
        <DashboardButton isClicked={isClicked === 1} onClick={() => setisClicked(1)} num="8" type="LPM" data="Reading" />
        <DashboardButton isClicked={isClicked === 2} onClick={() => setisClicked(2)} num="50" type="CM" data="Focus" />
        <SelectButton setDate={setDate} />
        <div className={styles.chart}> <Line data={data}  ></Line></div>
      </div>
    </div>
  </>
}



export default DashbordChart