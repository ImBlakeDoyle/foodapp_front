import React, {useState, useEffect} from 'react';
import axios from "axios";

function ItemForm(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);

    async function onFormSubmit(){
        await axios.post("http://localhost:3000/item/new", {name, quantity, weight, price, protein, carbs, fat, sugar})
        .then(response => console.log(response));
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Item name"
                name="name"
            />
            <input
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                placeholder="Quantity"
                name="quantity"
            />
            <input
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="weight"
                name="weight"
            />
            <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Price"
                name="price"
            />
            <input
                value={protein}
                onChange={e => setProtein(e.target.value)}
                placeholder="Protein"
                name="protein"
            />
            <input
                value={carbs}
                onChange={e => setCarbs(e.target.value)}
                placeholder="Carbs"
                name="carbs"
            />
            <input
                value={fat}
                onChange={e => setFat(e.target.value)}
                placeholder="Fat"
                name="fat"
            />
            <input
                value={sugar}
                onChange={e => setSugar(e.target.value)}
                placeholder="Sugar"
                name="sugar"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ItemForm;