import DashbordChart from "./DashbordChart";
//לייבלס אמור להיות משתנה לפי הסלקט שבעמוד
function Dashbord() {

   const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

    return <>
        <div >
            <DashbordChart labels={days} label='Graph' data={[10, 20, 40, 60, 40,100, 75]} />
        </div>

    </>
}

export default Dashbord;