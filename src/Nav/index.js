import React from 'react';
import "./style.css";

export default function Nav({currPage,setCurrPage}) {
    return (
        <nav className = "Nav">
            <ul>
                <li onClick={()=>setCurrPage("About")}className={currPage==="About"&&'active'}>About Me</li>
                <li onClick={()=>setCurrPage("Portfolio")}className={currPage==="Portfolio"&&'active'}>Portfolio</li>
                <li onClick={()=>setCurrPage("Contact")}className={currPage==="Contact"&&'active'}>Contact</li>
                <li onClick={()=>setCurrPage("Resume")}className={currPage==="Resume"&&'active'}>Resume</li>
            </ul>
        </nav>
    )
}
