import React, {useState, useEffect} from 'react';
import axios from "axios";
import './../../App.css'

function ItemForm(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const [weight, setWeight] = useState(0);
    const [measurement, setMeasurement] = useState("");
    const [price, setPrice] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);

    async function onFormSubmit(){
        await axios.post("http://localhost:3000/item/new", {name, category, quantity, weight, price, protein, carbs, fat, sugar})
        .then(response => console.log(response));
    }

    return(
        <form onSubmit={onFormSubmit} className="container">
            <label>Name:</label>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Item name"
                name="name"
                className="formInput"
            />
            <label>Category</label>
            <div>
                <select
                    value={category}
                    name="category"
                    className="formInput"
                    onChange={e => setCategory(e.target.value)}>
                        <option value="vegetable">Vegetable</option>
                        <option value="fruit">Fruit</option>
                </select>
            </div>
            <label>Quantity:</label>
            <input
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                placeholder="Quantity"
                name="quantity"
                className="formInput"
            />
            <label>Weight:</label>
            <input
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="weight"
                name="weight"
                className="formInput"
            />
            <select
                value={measurement}
                name="measurement"
                className="formInput"
                onChange={e => setMeasurement(e.target.value)}>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="L">l</option>
            </select>
            <label>Protein:</label>
            <input
                value={protein}
                onChange={e => setProtein(e.target.value)}
                placeholder="Protein"
                name="protein"
                className="formInput"
            />
            <label>Carbohydrates:</label>
            <input
                value={carbs}
                onChange={e => setCarbs(e.target.value)}
                placeholder="Carbs"
                name="carbs"
                className="formInput"
            />
            <label>Fat:</label>
            <input
                value={fat}
                onChange={e => setFat(e.target.value)}
                placeholder="Fat"
                name="fat"
                className="formInput"
            />
            <label>Sugar:</label>
            <input
                value={sugar}
                onChange={e => setSugar(e.target.value)}
                placeholder="Sugar"
                name="sugar"
                className="formInput"
            />
            <label>Total Price:</label>
            <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Price"
                name="price"
                className="formInput"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ItemForm;