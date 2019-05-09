import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemIndex(){
    const [allItems, addItem] = useState([{}]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get("http://localhost:3000/item/all");
            addItem(response.data);
            console.log("refreshed");
        }
        fetchItems();
    }, [])

    return(
        <div>
            {allItems.map((item, index) => {
                return(
                    <ul key={index}>
                        <strong>{item.name}</strong>
                        <li><p>Price: {item.price}</p></li>
                        <li><p>Protein: {item.protein}</p></li>
                        <li><p>Carbs: {item.carbs}</p></li>
                        <li><p>Fat: {item.fat}</p></li>
                        <li><p>Sugar: {item.sugar}</p></li>
                        <li><p>Calories: {item.calories}</p></li>
                    </ul>
                );
            })}
        </div>
    )
}

export default ItemIndex;

