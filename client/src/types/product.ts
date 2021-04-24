export interface IComment {
    _id: string;
    username: string;
    comment: string;
    user?: string;
    product?: string;
}

export interface IProduct {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    likes: string[];
    comments: IComment[];
}

export interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: string;
    total: number;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_ERROR = 'FETCH_ERROR',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    SET_LIKE = 'SET_LIKE',
    REMOVE_LIKE = 'REMOVE_LIKE',
    ADD_COMMENT = 'ADD_COMMENT',

}

interface FetchProducts {
    type: ProductActionTypes.FETCH_PRODUCTS,
}
interface FetchError {
    type: ProductActionTypes.FETCH_ERROR,
    payload: string
}
interface FetchSuccess {
    type: ProductActionTypes.FETCH_SUCCESS,
    payload: { paginatedProducts: IProduct[], total: number }
}

interface SetLike {
    type: ProductActionTypes.SET_LIKE
    payload: { userId: string, productId: string }
}

interface RemoveLike {
    type: ProductActionTypes.REMOVE_LIKE
    payload: { likes: string[], productId: string }
}


interface AddComment {
    type: ProductActionTypes.ADD_COMMENT,
    payload: {
        _id: string;
        username: string;
        comment: string;
        productId: string;
        userId: string;
    }
}


export type ProductAction = FetchProducts | FetchError | FetchSuccess | SetLike | RemoveLike | AddComment