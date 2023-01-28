import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import menuImg from '../assets/menu.png';
import closeImg from '../assets/close.png';

export default function Navbar() {
    const [isActive, setActive] = useState(false)
    return (
        <div className="Container">
            <h2>Anmol</h2>
            <div className={isActive ? "toggleactive toggle" : "toggle"} onClick={() => { setActive(!isActive) }}>
                <img className={!isActive ? "i1" : "disappear"} src={menuImg}></img>
                <img className={!isActive ? "disappear" : "i1"} src={closeImg}></img>
            </div>
            <ul className={isActive ? "nav active" : "nav inactive"} onClick={() => { setActive(!isActive) }}>
                <li><Link to='/' className="elem">Home</Link></li>
                <li><Link to='/about' className="elem">About</Link></li>
                <li><Link to='/contact' className="elem">Contact</Link></li>
                <li><Link to='/skills' className="elem">Skills</Link></li>
            </ul>
        </div>
    )
}
