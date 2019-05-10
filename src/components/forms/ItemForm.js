import React, {useState, useEffect} from 'react';
import axios from "axios";
import './../../App.css'

function ItemForm(){
    // const [name, setName] = useState("");
    // const [quantity, setQuantity] = useState(0);
    // const [category, setCategory] = useState("");
    // const [weight, setWeight] = useState(0);
    // const [measurement, setMeasurement] = useState("");
    // const [price, setPrice] = useState(0);
    // const [protein, setProtein] = useState(0);
    // const [carbs, setCarbs] = useState(0);
    // const [fat, setFat] = useState(0);
    // const [sugar, setSugar] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        quantity: 0,
        category: 'Vegetable',
        weight: 0,
        measurement: 'g',
        price: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        sugar: 0
    });

    const { name, quantity, category, weight, measurement, price, protein, carbs, fat, sugar } = formData;

    async function onFormSubmit(){
        await axios.post("http://localhost:3000/item/new", formData)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return(
        <form onSubmit={onFormSubmit} className="container">
            <div>
                <label>Name:</label>
                <input
                    value={name}
                    onChange={e => onChange(e)}
                    name="name"
                    className="formInput"
                    id="nameInput"
                />
            </div>
            <div>
                <label>Category</label>
                    <select
                        value={category}
                        name="category"
                        className="formInput"
                        onChange={e => onChange(e)}>
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                    </select>
            </div>
            <div>
                <label>Quantity:</label>
                <input
                    value={quantity}
                    onChange={e => onChange(e)}
                    name="quantity"
                    className="formInput"
                />
            </div>
            <div>
                <label>Weight:</label>
                <input
                    value={weight}
                    onChange={e => onChange(e)}
                    name="weight"
                    className="formInput"
                />
                <select
                    value={measurement}
                    name="measurement"
                    className="formInput"
                    onChange={e => onChange(e)}>
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="ml">ml</option>
                        <option value="L">l</option>
                </select>
            </div>
            <div>
                <label>Protein:</label>
                <input
                    value={protein}
                    onChange={e => onChange(e)}
                    name="protein"
                    className="formInput"
                />
            </div>
            <div>
                <label>Carbohydrates:</label>
                <input
                    value={carbs}
                    onChange={e => onChange(e)}
                    name="carbs"
                    className="formInput"
                />
            </div>
            <div>
                <label>Fat:</label>
                <input
                    value={fat}
                    onChange={e => onChange(e)}
                    name="fat"
                    className="formInput"
                />
            </div>
            <div>
                <label>Sugar:</label>
                <input
                    value={sugar}
                    onChange={e => onChange(e)}
                    name="sugar"
                    className="formInput"
                />
            </div>
            <div>
                <label>Total Price:</label>
                <input
                    value={price}
                    onChange={e => onChange(e)}
                    name="price"
                    className="formInput"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ItemForm;