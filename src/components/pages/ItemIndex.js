import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/Index.css'

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
                        <li><p className="itemlist">Price: {item.price}</p></li>
                        <li><p className="itemlist">Protein: {item.protein}</p></li>
                        <li><p className="itemlist">Carbs: {item.carbs}</p></li>
                        <li><p className="itemlist">Fat: {item.fat}</p></li>
                        <li><p className="itemlist">Sugar: {item.sugar}</p></li>
                        <li><p className="itemlist">Calories: {item.calories}</p></li>
                    </ul>
                );
            })}
        </div>
    )
}

export default ItemIndex;

