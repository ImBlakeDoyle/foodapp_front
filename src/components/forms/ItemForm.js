import React, { useState } from 'react';
import axios from "axios";
import '../../styles/App.css'

function ItemForm(){

    const [formData, setFormData] = useState({
        name: '',
        quantity: 1,
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
        <form onSubmit={onFormSubmit} className="container form-container">
            <div className="container form-field">
                <div className="row">
                    <label className="form-title">Name</label>
                </div>
                <div className="row">
                    <span className="label-emoji">✏️</span>
                    <input
                        value={name}
                        onChange={e => onChange(e)}
                        name="name"
                        className="formInput"
                        id="name-field"
                    />
                </div>
            </div>


            <div className="container form-field">
                <div className="row">
                    <label className="form-title">Category</label>
                </div>
                <div className="row">
                    <span className="label-emoji">🗃</span>
                    <select
                        value={category}
                        name="category"
                        className="formInput"
                        id="category-field"
                        onChange={e => onChange(e)}>
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                            <option value="meat">Meat</option>
                            <option value="dairy">Dairy</option>
                            <option value="carbs">Carbs</option>
                            <option value="snack">Snack</option>
                    </select>
                </div>
            </div>


            <div className="container form-field">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <label className="form-title">Quantity</label>
                        </div>
                            <span className="label-emoji">🤷‍</span>
                            <input
                                value={quantity}
                                type="number"
                                min="1"
                                onChange={e => onChange(e)}
                                name="quantity"
                                className="dual-form-input"
                            />
                    </div>
                    <div className="col">
                        <div className="row" id="weight-form">
                            <label className="form-title">Weight total</label>
                        </div>
                        <div className="row" id="weight-form">
                            <span className="label-emoji">⚖️</span>
                            <input
                                value={weight}
                                onChange={e => onChange(e)}
                                name="weight"
                                className="dual-form-input"
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
                    </div>
                </div>
            </div>


            <div>
                <span>🍖</span>
                <label>Protein:</label>
                <input
                    value={protein}
                    onChange={e => onChange(e)}
                    name="protein"
                    className="formInput"
                />
            </div>
            <div>
                <span>🍔</span>
                <label>Fat:</label>
                <input
                    value={fat}
                    onChange={e => onChange(e)}
                    name="fat"
                    className="formInput"
                />
            </div>
            <div>
                <span>🍚</span>
                <label>Carbs:</label>
                <input
                    value={carbs}
                    onChange={e => onChange(e)}
                    name="carbs"
                    className="formInput"
                />
            </div>
            <div>
                <span>🍭 </span>
                <label>Sugar:</label>
                <input
                    value={sugar}
                    onChange={e => onChange(e)}
                    name="sugar"
                    className="formInput"
                />
            </div>
            <div>
                <span>💸</span>
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