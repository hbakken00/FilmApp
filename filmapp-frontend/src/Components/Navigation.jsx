import React from "react"
import { RiAccountCircleFill, RiTv2Line } from "react-icons/ri"
import { Link } from "react-router-dom"

export const Navigation = () =>{
    return(
    <header id="navheader">
        <nav className="nav">
            <ul className="navul">
                <li><a href="#"> <RiTv2Line /> Hva skal jeg se?</a></li>
                <li><a href="#"> Bla gjennom sjangere</a></li>
                <li><a href="#"> <RiAccountCircleFill />  Bruker</a></li>
            </ul>
        </nav>
    </header>
    )
}



