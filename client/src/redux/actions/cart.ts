import { CartAction, CartActionTypes, ICartItem } from "../../types/cart"

export function addToCart(item: ICartItem): CartAction {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: item
    }
}


export function handleAmountCount(item: ICartItem, amount: number): CartAction {
    return {
        type: CartActionTypes.HANDLE_AMOUNT_COUNT,
        payload: { item: item, amount: amount }
    }
}

export function deleteFromCart(item: ICartItem): CartAction {
    return {
        type: CartActionTypes.DELETE_FROM_CART,
        payload: item
    }
}