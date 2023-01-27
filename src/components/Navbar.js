import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isActive, setActive] = useState(false)
    return (
        <div className="Container">
            <h2>Anmol</h2>
            <div className={isActive ? "toggleactive toggle" : "toggle"} onClick={() => { setActive(!isActive) }}></div>
            <ul className={isActive ? "nav active" : "nav inactive"} onClick={() => { setActive(!isActive) }}>
                <li><Link to='/' className="elem">Home</Link></li>
                <li><Link to='/about' className="elem">About</Link></li>
                <li><Link to='/contact' className="elem">Contact</Link></li>
                <li><Link to='/skills' className="elem">Skills</Link></li>
            </ul>
        </div>
    )
}
