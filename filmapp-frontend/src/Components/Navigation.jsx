import React, { useState } from "react"
import { RiAccountCircleFill, RiMenu3Line, RiTv2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

//oppset for navigasjons menyen i header, og hamburger meny
export const Navigation = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return( // la inn Link fra react-router-dom og routet dem til de sidene vi har foreløpig 
    <header id="navheader">
        <nav>
            
            <Link to="/home" className="logo"><img id="logoimg" src="bildemappe/logo.png" alt="logo"></img></Link>
           
            <div className="hamburger" onClick={toggleMenu}><RiMenu3Line/></div>
           
            <ul className={menuOpen ? 'open' : ''}>
           
           <li><Link to="/hva-skal-jeg-se"><RiTv2Line /> Hva skal jeg se?</Link></li>       
          
           <li><Link to="/sjangere">Bla gjennom sjangere</Link></li>
         
           <li><Link to="/velg-bruker"><RiAccountCircleFill /> Bruker</Link></li>
       
         </ul>
        </nav>
    </header>
    )
}



