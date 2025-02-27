 import React from "react"
 import { useState } from "react"

export default function Header() {
    const [active , setActive] = useState(false)
    const openNav = () =>{
          setActive(!active)
          
    }
    return (
        <header >
            <div className="header-wrapper background-white flex align-center space-between">
                <div className="dev-title color-black">
                    Muhammad Hassan Latif
                </div>
                <div className={active ? "header-nav open" : "header-nav"}>
                    <nav className="navigation">
                        <ul className="nav-list color-black gap-1 flex align-center">
                            <li><a href="#AboutOverview">About</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div onClick={openNav} className="mobile-nav">
                    <img  src="/assets/menu-hamburger.svg" alt="" />
                </div>
            </div>
        </header>
    )
}

