import React from "react"
import { RiAccountCircleFill, RiTv2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

export const Navigation = () =>{
    return(
    <header id="navheader">
        <nav className="nav">
            <ul className="navul">
          <li><Link to="/home"><RiTv2Line /> Hva skal jeg se?</Link></li>
          <li><Link to="/genres">Bla gjennom sjangere</Link></li>
          <li><Link to="/select-user"><RiAccountCircleFill /> Bruker</Link></li>
            </ul>
        </nav>
    </header>
    )
}



