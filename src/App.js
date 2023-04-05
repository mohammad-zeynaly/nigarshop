import React,{useState,useEffect} from "react";
import {useRoutes} from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import "./app.css";


function App(props) {

  const [statusMenu,setStatusMenu] = useState(false)
  let routers = useRoutes(routes)

  useEffect(() => {

    console.log(props)
  },[props])


  return (
    <div className={`font-iranSansMedium bg-[#EEEEEE] overflow-x-hidden `}>
    <Header/>
    {routers}
    <Footer/>
    <BottomMenu/>
    </div>
  );
}

export default App;
