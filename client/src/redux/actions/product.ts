import axios from "axios"
import { Dispatch } from "react"
import { ProductAction, ProductActionTypes, IProduct } from "../../types/product"

export const fetchProducts = (page: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
            const res = await axios.get(`http://localhost:5000/api/products?page=${page}`)
            setTimeout(() => {
                dispatch({ type: ProductActionTypes.FETCH_SUCCESS, payload: res.data })
            }, 500)
        }
        catch (e) {
            dispatch({ type: ProductActionTypes.FETCH_ERROR, payload: 'что-то пошло не так' })
        }
    }
}


export const like = (userId: string, productId: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const res = await axios.post('http://localhost:5000/api/products/like', { userId: userId, productId: productId })
            if (!res.data) return
            dispatch({ type: ProductActionTypes.SET_LIKE, payload: { userId: userId, productId: productId } })
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}



export const unlike = (userId: string, productId: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const res = await axios.post('http://localhost:5000/api/products/unlike', { userId: userId, productId: productId })
            dispatch({ type: ProductActionTypes.REMOVE_LIKE, payload: { likes: res.data, productId: productId } })
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}


export const addComment = (comment: any, setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>, product: IProduct) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const res = await axios.post('http://localhost:5000/api/products/comment', comment);
            dispatch({ type: ProductActionTypes.ADD_COMMENT, payload: comment })
            setProduct({ ...product, comments: [res.data, ...product.comments] })
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}



export const removeComment = (commentId: string, setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>, product: IProduct) => {
    return async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/products/comment/${commentId}`)
            setProduct({ ...product, comments: product.comments.filter(comment => comment._id !== res.data.commentId) })
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}