import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CartItem from '../components/CartItem';
import { CartStyled, CartBottomStyled, CartWrapper } from '../styles/components/Cart';
import { Link } from 'react-router-dom';
import { LinkButton, Title } from '../styles/index';
import emptyCart from '../assets/images/basket.svg';
import { ICartItem } from '../types/cart';



const Cart: React.FC = () => {
    const { items, totalCartPrice } = useTypedSelector(({ cart }) => cart)


    if (!items.length) {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Cart is empty 😢</h1>
                <img src={emptyCart} alt="emptyCart" />
                <Link to='/products'>
                    <LinkButton style={{ width: '200px', height: '70px', fontSize: '22px' }}>
                        back to shopping
                    </LinkButton>
                </Link>
            </div>
        )
    }

    return (
        <CartStyled>
            <Title>
                Shopping Cart
            </Title>
            <CartWrapper>
                {
                    items.map((item: ICartItem) =>
                        <CartItem item={item} key={item._id} />
                    )
                }
            </CartWrapper>
            <CartBottomStyled>
                <Link to='/products'>
                    <LinkButton>
                        back to shopping
                    </LinkButton>
                </Link>
                <h2>Total: {totalCartPrice}</h2>

            </CartBottomStyled>
        </CartStyled>
    )
}

export default Cart
