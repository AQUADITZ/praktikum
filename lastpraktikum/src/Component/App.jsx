import React from "react";
import './style.css'
import icon from "./kotak.jpg"
import icon2 from "./pantai.jpg"
import icon3 from "./pantai2.jpg"


const App = () =>{
    return(
        <div className="container">
            <nav>
            <h1>Travel _ yuk</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                        <a href="/">contact</a>
                        <a href="/">About me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default App