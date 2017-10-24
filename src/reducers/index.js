import { INCREMENT, DECREMENT, SET_DIFF } from "../actions/index";
import { combineReducers } from 'redux';

const initialState = {
    value: 0,
    diff: 1
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const extra = (state = {value: "EXTRA REDUCER"}, action) => {
    return state;
};

export const counter = combineReducers({
    counterReducer,
    extra
});