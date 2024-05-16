import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiTv2Line } from "react-icons/ri";

export const Navigation = () =>{
    return(
    <header>
        <nav>
            <ul>
                <li><a href="#"> <RiTv2Line /> Hva skal jeg se?</a></li>
                <li><a href="#"> Bla gjennom sjangere</a></li>
                <li><a href="#"> <RiAccountCircleFill />  Bruker</a></li>
            </ul>
        </nav>
    </header>
    )
}