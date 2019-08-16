import React, { useState, useEffect } from 'react';
import axios from "axios";

function RecipeForm(){

    const [formData, setFormData] = useState({
        name: '',
        ingredients: [],
        method: [],
        image: ""
    });

    const [allIngredients, fetchIngredients] = useState([{}]);

    useEffect(() => {
                const fetchItems = async () => {
                    const response = await axios.get("http://localhost:3000/item/all");
                    fetchIngredients(response.data);
                    console.log(response.data);
                    console.log("refreshed");
                }
                fetchItems();
            }, [])

    return(
        <div>Hello</div>
    )
}

export default RecipeForm;