import React, { useState } from 'react';
import axios from "axios";
import '../../styles/App.css';


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
        .then(alert("item added"))
        .catch(err => console.log(err));
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return(
        <form onSubmit={onFormSubmit} className="container form-container" id="full-form">
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
                            <option value="vegetable">🥕 Vegetable 🍅</option>
                            <option value="fruit">🍇 Fruit 🥝</option>
                            <option value="meat">🐠 Meat 🍗</option>
                            <option value="dairy">🥛 Dairy 🧀</option>
                            <option value="carbs">🍞 Carbs 🍝</option>
                            <option value="snack">🍨 Snack 🍩</option>
                            <option value="alcohol">🍺 Drink ☕</option>
                    </select>
                </div>
            </div>


            <div className="container form-field">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <label id="quantity-label">Quantity</label>
                        </div>
                        <div className="row weight-form">
                            <span className="label-emoji">🤷‍</span>
                            <input
                                value={quantity}
                                type="number"
                                min="1"
                                onChange={e => onChange(e)}
                                name="quantity"
                                className="dual-form-input"
                                id="quantity-input"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label id="weight-label">Weight total</label>
                        </div>
                        <div className="row weight-form">
                            <span className="label-emoji">⚖️</span>
                            <input
                                value={weight}
                                type="number"
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

            <div className="container form-field">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="row">
                                <label className="quad-title">Protein</label>
                            </div>
                            <div className="row nutritional-form">
                                <span className="label-emoji">🍖</span>
                                <input
                                    value={protein}
                                    type="number"
                                    onChange={e => onChange(e)}
                                    name="protein"
                                    className="quad-form-input"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <div className="row">
                                <label className="quad-title">Fat</label>
                            </div>
                            <div className="row nutritional-form">
                                <span className="label-emoji">🍔</span>
                                <input
                                    value={fat}
                                    type="number"
                                    onChange={e => onChange(e)}
                                    name="fat"
                                    className="quad-form-input"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <div className="row">
                                <label className="quad-title">Carbs</label>
                            </div>
                            <div className="row nutritional-form">
                                <span className="label-emoji">🍚</span>
                                <input
                                    value={carbs}
                                    type="number"
                                    onChange={e => onChange(e)}
                                    name="carbs"
                                    className="quad-form-input"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <div className="row">
                                <label className="quad-title">Sugar</label>
                            </div>
                            <div className="row nutritional-form">
                                <span className="label-emoji">🍭</span>
                                <input
                                    value={sugar}
                                    type="number"
                                    onChange={e => onChange(e)}
                                    name="sugar"
                                    className="quad-form-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col form-field" id="price-field">
                <div className="row">
                    <span id="price-label">💸</span>
                    <input
                        value={price}
                        type="number"
                        onChange={e => onChange(e)}
                        name="price"
                        className="formInput"
                        id="price-input"
                    />
                </div>
            </div>

            <div className="row">
                <button type="submit" className="submit-button">+</button>
            </div>
        </form>
    )
}

export default ItemForm;