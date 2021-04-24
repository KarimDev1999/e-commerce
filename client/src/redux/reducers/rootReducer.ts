import { combineReducers } from "redux";
import { products } from './products';
import { cart } from './cart'
import { auth } from './auth'
export const rootReducer = combineReducers({
    products,
    cart,
    auth
})

export type RootState = ReturnType<typeof rootReducer>