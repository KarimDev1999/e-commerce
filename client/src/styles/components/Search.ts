import styled from 'styled-components';
import searchImg from '../../assets/images/search.svg'
import { FadeInAnimation } from '../index'



export const SearchWrapper = styled.div`
    width: 50%;
    position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            top: 50%;
            right:0;
            transform: translateY(-50%);
            background: url(${searchImg}) no-repeat center;
            &:hover {
                transform: scale(1.1)
            }
        }
`

export const SearchInput = styled.input`
    height: 34px;
    width: 100%;
    color: #333;
    background: #eaeaea;
    padding: 0 50px 0 12px;
    border-radius: 8px;
    border: none;
`


export const PopupStyled = styled.div`
    position: absolute;
    z-index: 999;
    width: 35%;
    animation: ${FadeInAnimation} .3s;
    ul {
        list-style: none;
        li {
            padding: 0px 10px;
            border: 1px solid lightgrey;
            height: 50px;
            background-color: #fff;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
        }
    }
    img {
        width: 70px;
        height: 50px;
    }
`