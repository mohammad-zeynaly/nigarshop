import React,{useState,useEffect} from "react";
import {useRoutes,useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import "./app.css";


function App(props) {

  const routers = useRoutes(routes)
  const location = useLocation()

  useEffect(() => {
    
  },[])


  return (
    <div className={`font-iranSansMedium bg-[#EEEEEE] overflow-x-hidden `}>

    {location.pathname === "/myAccount" ? "" : <Header/>}
    {routers}
    {location.pathname === "/myAccount" ? "" : <Footer/>}
    <BottomMenu/>
    </div>
  );
}

export default App;
