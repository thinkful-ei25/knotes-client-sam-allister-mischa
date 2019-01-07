import {
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from '../actions/register';

const initialState = {
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === REGISTER_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null,
            registered: false
        });
    } else if (action.type === REGISTER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error,
            registered: false
        });
    } else if (action.type === REGISTER_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            registered: true
        })
    }
    return state;
}