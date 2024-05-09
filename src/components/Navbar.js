import React from 'react'
import logo from "../img/logo.png";
import settingsIcon from "../img/settings-icon.png";
import avaIcon from "../img/user-icon.png";



export default function Navbar() {
  return (
    <div className="navbar">
        <div className="ava-icon"><img src={avaIcon} alt="avatar icon" className="ava-img" /></div>
        <div className="logo-navbar"><img src={logo} alt="logo" /></div>
        <div className="settings-icon"><img src={settingsIcon} alt="logo" className="settings-img"/></div>
    </div>
  )
}
