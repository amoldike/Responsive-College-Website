import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About US</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className="btn">Contact US</button></li>
            </ul>
        </nav>
    )
}

export default Navbar