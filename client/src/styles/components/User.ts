import styled from 'styled-components'
import arrowDown from '../../assets/images/arrow-down-sign-to-navigate.svg'
import { FadeInAnimation } from '../index'


export const UserTopProfileBlock = styled.div`
    user-select:none;
    display: flex;
    align-items: center;
    height: 100%;
    position:relative;
    padding: 0px 20px 0px 3px;
    img {
        width: 30px;
        height:30px;
    }
    span {
        margin-left: 5px;
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    &::after {
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
        right: 5px;
        background: url(${arrowDown}) no-repeat center center;
    }
`


export const UserTopProfilePopup = styled.div`
    width: 100%;
    position: absolute;
    top: 80px;
    transform: translateX(-50%);
    min-width: 200px;
    animation: ${FadeInAnimation} .3s;
    ul {
        background-color: #fff;
        list-style: none;
        border-radius: 5px;
        li {
            padding: 0px 10px;
            height: 50px;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
                background-color: rgba(128,128,128, 0.1)
            }
        }
    }
`

