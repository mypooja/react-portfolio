import React from 'react'
import "./style.css"
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

export default function Content(props) {
    return (
        <main className="Content">
            <section>
               {props.currPage==="About"?<About/>:null}
               {props.currPage==="Portfolio"?<Portfolio/>:null}
               {props.currPage==="Contact"?<Contact/>:null}
               {props.currPage==="Resume"?<Resume/>:null}
            </section>
        </main>
    )
}
