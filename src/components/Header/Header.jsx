import React from "react"
import Topbar from "../Topbar/Topbar"
import Navbar from "../Navbar/Navbar"

function Header () {
    return(
        <header className="header">
        <Topbar />
        <Navbar />        
        </header>
    )
}

export default Header;