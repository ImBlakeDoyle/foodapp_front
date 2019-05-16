import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css'

function HomePage() {
    return(
        <div className="container">
            <Link to="/item/new">
                <button className="btn btn-primary" id="button1">Add a new item</button>
            </Link>
            <Link to="/item/all">
                <button className="btn btn-success" id="button2">View all items</button>
            </Link>
        </div>
    );
}

export default HomePage;