
export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
}


export interface AuthState {
    currentUser: IUser | null;
    isAuth: boolean | null;
}

export enum AuthAcionTypes {
    SET_USER = 'SET_USER',
    LOGOUT = 'LOGOUT',
}

interface SetUser {
    type: AuthAcionTypes.SET_USER;
    payload: IUser;
}

interface Logout {
    type: AuthAcionTypes.LOGOUT;
}

export type AuthAction = SetUser | Logout