import { ProductAction, ProductActionTypes, ProductState } from '../../types/product';

const initialState: ProductState = {
    products: [],
    loading: false,
    error: '',
    total: 0
}



export const products = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS: {
            return { ...state, loading: true }
        }
        case ProductActionTypes.FETCH_SUCCESS: {
            return {
                ...state, loading: false, products: action.payload.paginatedProducts, total: action.payload.total
            }
        }
        case ProductActionTypes.FETCH_ERROR: {
            return {
                ...state, loading: false, error: action.payload
            }
        }

        case ProductActionTypes.SET_LIKE: {
            return {
                ...state,
                products: state.products.map(product => product._id === action.payload.productId ? { ...product, likes: [...product.likes, action.payload.userId] } : product)
            }
        }
        case ProductActionTypes.REMOVE_LIKE: {
            return {
                ...state,
                products: state.products.map(product => product._id === action.payload.productId ? { ...product, likes: action.payload.likes } : product)
            }
        }
        case ProductActionTypes.ADD_COMMENT: {
            return {
                ...state,
                products: state.products.map(product => product._id === action.payload.productId ? { ...product, comments: [...product.comments, action.payload] } : product)
            }
        }


        default: {
            return state
        }
    }
}