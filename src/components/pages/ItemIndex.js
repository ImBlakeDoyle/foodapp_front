import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemIndex(){
    const [allItems, addItem] = useState([{}]);

    // perform get function on useEffect aka componenet did mount

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get("http://localhost:3000/item/all");
            addItem(response.data);
            console.log("refreshed");
        }
        fetchItems();
    }, [])

    // useEffect( async() => {
    //     const response = await axios.get("http://localhost:3000/item/all")
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    // })

    return(
        <div>
            {allItems.map((item, index) => {
                return(
                    <ul key={index}>
                        <strong>{item.name}</strong>
                        <li><p>Quantity: {item.quantity}</p></li>
                        <li><p>Price: {item.price}</p></li>
                        <li><p>Protein: {item.protein}</p></li>
                        <li><p>Carbs: {item.carbs}</p></li>
                        <li><p>Fat: {item.fat}</p></li>
                        <li><p>Sugar: {item.fat}</p></li>
                        <li><p>Calories: {item.fat}</p></li>
                    </ul>
                );
            })}
        </div>
    )
}

export default ItemIndex;