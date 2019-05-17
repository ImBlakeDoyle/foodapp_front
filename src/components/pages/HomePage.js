import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css'

function HomePage() {
    return(
        <div className="home-container">
            <Link to="/item/new">
                <button className="btn btn-success" id="button1"><span className="home-emoji">🥦</span><span className="home-emoji">🥩</span> Add <span className="home-emoji">🧀</span><span className="home-emoji">🍬</span></button>
            </Link>
            <h1 id="title"><span id="title-emoji">🍌</span>This<span className="title-emoji">🍩</span>Is<span className="title-emoji">🍳</span>My<span className="title-emoji">🍔</span>Food<span className="title-emoji">🥜</span>App<span className="title-emoji">🍺</span></h1>
            <Link to="/item/all">
                <button className="btn btn-primary" id="button2">🍓🥗 All 🍨🌽</button>
            </Link>
        </div>
    );
}

export default HomePage;