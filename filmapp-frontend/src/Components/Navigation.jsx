import React from "react"
import { RiAccountCircleFill, RiTv2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

//oppset for navigasjons menyen i header
export const Navigation = () =>{
    return( // la inn Link fra react-router-dom og routet dem til de sidene vi har foreløpig 
    <header id="navheader">
        <nav>
            <Link to="/home" className="logo"><img id="logoimg" src="bildemappe/logo.png"></img></Link>
            <ul>
          <li><Link to="/home"><RiTv2Line /> Hva skal jeg se?</Link></li>       
          <li><Link to="/home">Bla gjennom sjangere</Link></li>
          <li><Link to="/select-user"><RiAccountCircleFill /> Bruker</Link></li>
            </ul>
        </nav>
    </header>
    )
}



