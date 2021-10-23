import {
    ADD_NEW_USER,
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
} from './actionTypes.js'
const InitialState = {
    users: [],
    user: {},
    error: {},
    loading: true,
    isLoading: false,
}

const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER: 
            return {
                ...state,
                error: {},
                isLoading: true
            }
        

        case ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, action.payload],

            }

        case ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
            default:
                return state

    }
}
export default userReducer