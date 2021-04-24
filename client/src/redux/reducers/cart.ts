import { CartAction, CartActionTypes, ICartItem, CartState } from "../../types/cart"

const initialState: CartState = {
    items: [],
    totalCartPrice: 0
}



export const cart = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            return {
                ...state,
                totalCartPrice: state.totalCartPrice + action.payload.price,
                items: [
                    ...state.items, { ...action.payload, count: 1, totalItemPrice: action.payload.price }
                ],
            }
        }
        case CartActionTypes.HANDLE_AMOUNT_COUNT: {
            const newItems = state.items.map(item => item._id === action.payload.item._id ? { ...item, count: action.payload.amount, totalItemPrice: action.payload.amount * item.price } : item)
            return {
                ...state,
                totalCartPrice: newItems.reduce((acc, item) => acc + item.totalItemPrice, 0),
                items: newItems
            }
        }


        case CartActionTypes.DELETE_FROM_CART: {
            return {
                ...state,
                totalCartPrice: state.totalCartPrice - action.payload.totalItemPrice,
                items: state.items.filter(item => item._id !== action.payload._id)
            }
        }


        default: {
            return state
        }
    }
}