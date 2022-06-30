
import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContex";
import Content from "./Content";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Popup from "./popUp/Popup";


function Main() {

    const [headerName, setHeaderName] = useState()
    const [popUpContent, setPopUpContent] = useState({})
    // const obj = { title: "ddd", question: "aaa?", yesFn: () => { console.log("yesss") } }


    const [isHeader, setIsHeader] = useState(true)
    const [isNav, setIsNav] = useState(false)
    const [isNavClosed, setIsNavClosed] = useState(false)

    return <>
        <MainContext.Provider value={{ headerName, setHeaderName, popUpContent, setPopUpContent }}>
            {isHeader && <Header setIsNav={setIsNav} setIsNavClosed={setIsNavClosed} />}
            <Content setIsHeader={setIsHeader} />
            {isNav && <Nav setIsNav={setIsNav} isNav={isNav} setIsNavClosed={setIsNavClosed} isNavClosed={isNavClosed} />}
            {(popUpContent && Object.keys(popUpContent).length != 0) && <Popup />}
        </MainContext.Provider>

    </>
}

export default Main;
