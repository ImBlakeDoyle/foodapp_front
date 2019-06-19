import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import '../../styles/Index.css'
import { fetchItems } from "../../actions";
import { connect } from "react-redux";

// function ItemIndex(){
//     const [allItems, addItem] = useState([{}]);

//     useEffect(() => {
//         const fetchItems = async () => {
//             const response = await axios.get("http://localhost:3000/item/all");
//             addItem(response.data);
//             console.log("refreshed");
//         }
//         fetchItems();
//     }, [])

//     return(
//         <div>
//             {allItems.map((item, index) => {
//                 return(
//                     <ul key={index}>
//                         <strong>{item.name}</strong>
//                         <li><p className="itemlist">Price: {item.price}</p></li>
//                         <li><p className="itemlist">Protein: {item.protein}</p></li>
//                         <li><p className="itemlist">Carbs: {item.carbs}</p></li>
//                         <li><p className="itemlist">Fat: {item.fat}</p></li>
//                         <li><p className="itemlist">Sugar: {item.sugar}</p></li>
//                         <li><p className="itemlist">Calories: {item.calories}</p></li>
//                     </ul>
//                 );
//             })}
//         </div>
//     )
// }


class ItemIndex extends Component{
    componentDidMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }

    onRemoveQuantity = async(item) => {
        const { fetchItems } = this.props;
        const { _id } = item;
        let newQuantity = item.quantity -= 1;
        console.log(newQuantity);
        await axios.patch(`http://localhost:3000/item/${_id}`, {quantity: newQuantity})
        .then(() => {fetchItems()});
    }

    onNameChange = async(item) => {
        const { fetchItems } = this.props;
        const { _id } = item;
        let newName = "BLAKE";
        await axios.patch(`http://localhost:3000/item/${_id}`, {name: newName})
        .then(() => {fetchItems()})
    }

    render() {
        const { items } = this.props;
        return(
            <div>
                <h1 className="heading">All Items</h1>
                <table className="container">
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>💵 Price / ea</th>
                            <th>🍖 Protein</th>
                            <th>🍚 Carbs</th>
                            <th>🍔 Fat</th>
                            <th>🍭 Sugar</th>
                            <th>🔬 Calories</th>
                            <th>📟 Quantity</th>
                        </tr>
                    {items.map((item, index) => {
                        return(  
                                <tr key={index}>
                                    <td>{item.name} {item.weight}{item.measurement}</td>
                                    <td>${item.price}</td>
                                    <td>{item.protein}g </td>
                                    <td>{item.carbs}g </td>
                                    <td>{item.fat}g </td>
                                    <td>{item.sugar}g </td>
                                    <td>{item.calories}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemIndex);

