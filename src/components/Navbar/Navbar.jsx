import React from 'react'
import logo from '../../logo.png'
import './navbar.scss'

export default function Navbar() {
    return(
        <nav className="nav-bar">
            <img src={logo} alt=""/>
            <ul className="nav-links">
                <li>
                    <a className ="nav-link" href="/">Home</a>
                </li>
                <li>
                    <a className ="nav-link" href="/">About</a>
                </li>
                <li>
                    <a className ="nav-link" href="/">Tours</a>
                </li>
            </ul>
        </nav>
    )

}