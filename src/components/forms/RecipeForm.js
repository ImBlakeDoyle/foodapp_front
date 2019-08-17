import React, { useState, useEffect } from 'react';
import axios from "axios";

function RecipeForm(){

    const [formData, setFormData] = useState({
        name: '',
        ingredients: [],
        ingredient: "",
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
            }, []);

    async function onFormSubmit(){
        setFormData({...formData, [formData.ingredients]: formData.ingredients.push(formData.ingredient)})
        await axios.post("http://localhost:3000/recipe/new", formData)
        .then(response => console.log(response))
        .then(alert("recipe added"))
        .catch(err => console.log(err));
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    function addIngredient(){
        setFormData({ingredients: [...formData.ingredients, ""]})
        console.log(formData.ingredients);
    }

    const handleChange = (e, index) => {
        console.log(e.target.value);
        setFormData({...formData, [formData.ingredients[index]]: e.target.value});
    }

    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                    value={formData.name}
                    onChange={e => onChange(e)}
                    name="name"/>
                </div>

                <div>
                    {formData.ingredients.map((ig, index) => {
                        return(
                            <div key={index}>
                                <input 
                                value={formData[index]}
                                onChange={(e)=>handleChange(e, index)}
                                />
                            </div>
                        )
                    })}
                </div>
                <button 
                type="button" 
                onClick={() => addIngredient()}
                >Add Ingredient
                </button>

                


                {/* <div>
                    <label>Ingredients</label>
                    <input 
                    value={formData.ingredient}
                    onChange={e => onChange(e)}
                    name="ingredient"/>
                </div>
                <div>
                    <button
                    onClick={addIngredientHandler}
                    >Add ingredient</button>
                </div> */}


                <div>
                    <label>Method</label>
                    <input 
                    value={formData.method}
                    onChange={e => onChange(e)}
                    name="method"/>
                </div>
                <div>
                <button type="submit">+</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeForm;