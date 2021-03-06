import React from 'react'

import logo from './../assets/images/ZFM_MADI_Icon.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img className="App-logo" src={logo} alt="" /></span>
        <h1>MatheDigital</h1>
        <p>Willkommen beim Projekt MatheDigital des Zentrum für Mathematik e.V.: Programmieren mit dem Calliope Mini.</p>
    </header>
)

export default Header
