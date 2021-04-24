import React, { useState, useEffect, useRef } from 'react';
import { HeaderStyled, CartIconStyled, CartCounter, CartImg, CartLogo } from '../styles/components/Header';
import { LinkButton } from '../styles/index';
import cartImg from '../assets/images/shopping-cart.svg'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICartItem } from '../types/cart';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/user.svg';
import Search from '../components/Search';
import { UserTopProfileBlock } from '../styles/components/User';
import UserPopup from './UserPopup';
import usePopup from '../hooks/usePopup';


const Header: React.FC = () => {
    const { items } = useTypedSelector(({ cart }) => cart);
    const { isAuth, currentUser } = useTypedSelector(({ auth }) => auth);
    const { visible, setVisible, ref } = usePopup()


    const handleClick = () => {
        setVisible(!visible)
    }



    return (
        <HeaderStyled>
            <CartLogo>E-commerce</CartLogo>
            <Search />
            {
                isAuth && currentUser ?
                    <UserTopProfileBlock ref={ref} onClick={handleClick}>
                        <img src={userIcon} alt="userIcon" />
                        <span>{currentUser.username}</span>
                        {
                            visible && <UserPopup />
                        }
                    </UserTopProfileBlock>
                    : <Link to='/login'>
                        <LinkButton>
                            Войти
                        </LinkButton>
                    </Link>
            }

            <Link to='/cart'>
                <CartIconStyled>
                    <CartImg src={cartImg} alt="shop-cart" />
                    <CartCounter>{items.reduce((acc: number, item: ICartItem) => acc + item.count, 0)}</CartCounter>
                </CartIconStyled>
            </Link>
        </HeaderStyled>
    )
}

export default Header
