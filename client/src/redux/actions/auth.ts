import { Dispatch } from "react"
import { IUser, AuthAcionTypes, AuthAction } from "../../types/auth"
import axios from 'axios';


export const setUser = (user: IUser) => {
    return {
        type: AuthAcionTypes.SET_USER,
        payload: user
    }
}

export const logout = () => {
    return {
        type: AuthAcionTypes.LOGOUT
    }
}

export const register = (user: any) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/register', user);
            localStorage.setItem('access_token', data.access_token)
            dispatch(setUser(data.user))
        }
        catch (e) {
            alert(e.response.data.message)
        }

    }
}

export const login = (user: any) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', user)
            localStorage.setItem('access_token', data.access_token)
            dispatch(setUser(data.user))
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}


export const checkToken = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/auth/checkToken',
                { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } }
            )
            dispatch(setUser(data))
        }
        catch (e) {
            console.log(e.response.data.message)
        }
    }
}

