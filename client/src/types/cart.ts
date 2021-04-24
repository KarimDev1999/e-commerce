import { IComment, IProduct } from './product';

export interface ICartItem extends IProduct {
    count: number;
    totalItemPrice: number
}

export interface CartState {
    items: ICartItem[],
    totalCartPrice: number,
}


export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    HANDLE_AMOUNT_COUNT = 'HANDLE_AMOUNT_COUNT',
    DELETE_FROM_CART = 'DELETE_FROM_CART'
}


interface AddToCart {
    type: CartActionTypes.ADD_TO_CART,
    payload: ICartItem
}

interface HandleAmountCount {
    type: CartActionTypes.HANDLE_AMOUNT_COUNT
    payload: { item: ICartItem, amount: number }
}

interface DeleteFromCart {
    type: CartActionTypes.DELETE_FROM_CART,
    payload: ICartItem
}


export type CartAction = AddToCart | HandleAmountCount | DeleteFromCart