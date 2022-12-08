import React, {useState} from 'react'
import PortfolioCard from "../PortfolioCard"
import codeconflictImg from "../images/code-conflict-project2-screenshot.png"

import weatherappImg from "../images/weather-app-screen-shot.png"
import recipeprojectImg from "../images/recipe-project-screen-shot.png"
import socialnetworkAPIImg from "../images/socialnetworkapi-sreenshot.png"

import "./style.css"

export default function Portfolio() {
    const [projects] = useState([
        {
            name:"codeconflict",
            github:"https://github.com/neft-tk/Code-Conflict",
            deploy:"https://code-conflict.herokuapp.com/",
            img:codeconflictImg
        },
        
        {
            name:"Weatherapp",
            github:"https://github.com/mypooja/weatherApp",
            deploy:" https://mypooja.github.io/weatherApp/",
            img:weatherappImg
        },
        {
            name:"RecipeProject",
            github:"https://github.com/24rgraham/recipe-project",
    
            img:recipeprojectImg
        },
        {
            name:"Social Network API",
            github:"https://github.com/mypooja/Social-Network-API",
            Screenshotvideolink: "https://drive.google.com/file/d/1jzV1lLfXjtaHmmatfozSDfLMkH-hGB2v/view",
            img:socialnetworkAPIImg
        },
        
    ])
    return (
        <div className="Portfolio">
            <h1>Projects</h1>
            <div className="cardBox">
            {projects.map((thing,i)=><PortfolioCard key={i} data={thing}/>)}

            </div>
        </div>
    )
}
