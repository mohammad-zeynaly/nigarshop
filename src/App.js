import React from "react"
import {useRoutes} from "react-router-dom"
import Header from "./components/Header/Header"
import routes from "./routes"
import Footer from "./components/Footer/Footer"
import "./app.css";

function App() {

  let routers = useRoutes(routes)

  return (
    <div className="font-iranSansMedium bg-[#EEEEEE]">
    <Header/>
    {routers}
    <Footer/>
    </div>
  );
}

export default App;
