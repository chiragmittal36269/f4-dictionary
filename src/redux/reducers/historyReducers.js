import { ADD, REMOVE } from "../actions/actionTypes";

const initialState = [];

const historyReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.value];

        case REMOVE:
            return state - 1;

        default:
            return state;
    }
};

export default historyReducers;
