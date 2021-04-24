import { AuthAcionTypes, AuthAction, AuthState } from "../../types/auth"

const initialState: AuthState = {
    currentUser: null,
    isAuth: null,
}


export const auth = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthAcionTypes.SET_USER: {
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            }
        }
        case AuthAcionTypes.LOGOUT: {
            localStorage.removeItem('access_token')
            return {
                ...state,
                currentUser: null,
                isAuth: false
            }
        }
        default: {
            return state
        }
    }
}