import React from 'react'
import './NavBar.css'
export default function NavBar() {
    return (
        <><div className=''>
            <ul className="topnav">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="right"><a href="#about">Help</a></li>
            </ul>
            </div>
        </>
    )
}
