import React from 'react'
import "./style.css"

export default function PortfolioCard({data}) {
    return (
        <div className="PortfolioCard">
            <img src = {data.img} alt = {data.name}/>
            <div className="overlay">
                <div className="links">
                <a href={data.deploy} target="_blank"> <h3>{data.name}</h3></a>
                <a href={data.github} target="_blank">👀</a>
                </div>
            </div>
        </div>
    )
}
