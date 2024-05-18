import React from "react"
import { RiAccountCircleFill, RiTv2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

export const Navigation = () =>{
    return( // la inn Link fra react og routet dem til de sidene vi har foreløpig 
    <header id="navheader">
        <nav className="nav">
            <ul className="navul">
          <li><Link to="/home"><RiTv2Line /> Hva skal jeg se?</Link></li>       
          <li><Link to="/home">Bla gjennom sjangere</Link></li>
          <li><Link to="/select-user"><RiAccountCircleFill /> Bruker</Link></li>
            </ul>
        </nav>
    </header>
    )
}



