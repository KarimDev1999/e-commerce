import React from 'react'
import { CartItemStyled, CartProductImg } from '../styles/components/Cart';
import { Button } from '../styles/index';
import { ICartItem } from '../types/cart';
import InputCount from './InputCount';
import { deleteFromCart } from '../redux/actions/cart';
import { useDispatch } from 'react-redux';


export interface CartItemProps {
    item: ICartItem
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {

    const dispatch = useDispatch()

    const deleteItem = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
        dispatch(deleteFromCart(item))
    }

    return (
        <CartItemStyled >
            <CartProductImg>
                <img src={'https://e-commerce-test-app.herokuapp.com/' + item.image} alt="img" />
            </CartProductImg>
            <div>{item.name}</div>
            <InputCount item={item} />
            <div style={{ width: '100px' }}>{item.totalItemPrice} $</div>
            <Button onClick={deleteItem} style={{ width: '35px', height: '35px' }}>✕</Button>
        </CartItemStyled>
    )
}

export default CartItem
