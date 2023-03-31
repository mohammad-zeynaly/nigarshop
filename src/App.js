import React from "react"
import {useRoutes} from "react-router-dom"
import routes from "./routes"
import Header from "./components/Header/Header"
import "./app.css";

function App() {

  let routers = useRoutes(routes)

  return (
    <div className="font-iranSansMedium bg-[#EEEEEE]">
    <Header/>
    {routers}
    </div>
  );
}

export default App;
