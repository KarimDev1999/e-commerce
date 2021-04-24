import styled from 'styled-components';
import { Button } from '..';



export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`


export const CartItemStyled = styled.div`
    margin-bottom: 20px;
    width: 95%;
    height: 125px;
    background-color: rgba(119, 136, 153, .5);
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
`


export const CartBottomStyled = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
`



export const InputStyled = styled.input`
    width: 55px;
    height: 35px;
    outline: none;
    text-align: center;
    margin: 0 5px;
    border: 2px solid rgba(119, 136, 153, 1)
`

export const PlusButton = styled(Button)`
    width: 15px;
    height: 15px;
`

export const MinusButton = styled(Button)`
    width: 15px;
    height: 15px;
    font-weight: bold;
`


export const CartWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-bottom: 10px;
`

export const CartProductImg = styled.div`
    max-width: 135px;
    height: 100%;
    img {
    width: 100%;
    height: 100%
    }
`