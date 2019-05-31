import axios from "axios";

export const fetchItems = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3000/item/all");

        dispatch({
            type: "FETCH_ITEMS",
            payload: response.data
        });
    }
}