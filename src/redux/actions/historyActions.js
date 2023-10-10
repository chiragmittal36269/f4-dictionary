import { ADD, REMOVE } from "./actionTypes";

export const add = (value) => {
    return {
        type: ADD,
        value: value,
    };
};

export const remove = (value) => {
    return {
        type: REMOVE,
        value: value,
    };
};
