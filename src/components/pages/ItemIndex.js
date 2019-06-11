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

    onAddQuantity = async(item) => {
        const { fetchItems } = this.props;
        const { _id } = item;
        const newQuantity = item.quantity += 1;
        await axios.patch(`http://localhost:3000/item/${_id}`, {quantity: newQuantity})
        .then(() => {fetchItems()});
    }

    render() {
        const { items } = this.props;

        return(
            <div>
                <h1 className="heading">All Items</h1>
                {items.map((item, index) => {
                    return(
                            <div key={index} className="itemList">
                                <div className="itemProp itemTitle">{item.name} {item.weight}{item.measurement} x {item.quantity}</div>
                                <div className="itemProp">${item.price} ea</div>
                                <div className="itemProp">🍖 {item.protein}g protein</div>
                                <div className="itemProp">🍚 {item.carbs}g carbs</div>
                                <div className="itemProp">🍔 {item.fat}g fat</div>
                                <div className="itemProp">🍭 {item.sugar}g sugar</div>
                                <div className="itemProp">Calories: {item.calories}</div>
                                <button className="itemProp" onClick={() => this.onAddQuantity(item)}>+</button>
                            </div>
                    );
                })}
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

