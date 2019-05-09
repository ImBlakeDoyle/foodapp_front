import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <Link to="/item/new">
                <button>Add a new item</button>
            </Link>
            <Link to="/item/all">
                <button>View all items</button>
            </Link>
        </div>
    );
}

export default HomePage;