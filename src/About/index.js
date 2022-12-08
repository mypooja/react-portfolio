import React from 'react'
import "./style.css"
import pic from "../images/PoojaProfilePic.jpg"

export default function About() {
    return (
        <div className="About">
            <img src={pic} alt="profile pic" />
            <h2>About Me</h2>
            <p>I graduted with bachelors degree in Electronics and Communication Engineering.After completing my graducation i worked as a Lecturer for five years.
                now i want to start my career as a web developer. </p>
           
        </div>
    )
}
