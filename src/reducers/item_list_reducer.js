const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "FETCH_ITEMS":
            return action.payload;
        default:
            return state
    }
}