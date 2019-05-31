import { combineReducers } from "redux";
import itemListReducer from "./item_list_reducer";

export default combineReducers({
    items: itemListReducer
});