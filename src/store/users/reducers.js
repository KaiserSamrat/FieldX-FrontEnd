import {
    ADD_NEW_USER,
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOADING_ADD_USER
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
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: true,
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }

        case GET_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                //change here
                loading: false,
            }
        case ADD_NEW_USER: {
            return {
                ...state,
                error: {},
                isLoading: true
            }
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