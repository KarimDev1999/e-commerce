import React, { useEffect, useRef } from 'react'
import { InputStyled, PlusButton, MinusButton } from '../styles/components/Cart';
import { useDispatch } from 'react-redux';
import { handleAmountCount } from '../redux/actions/cart';
import { ICartItem } from '../types/cart';

export interface InputCountProps {
    item: ICartItem
}


const InputCount: React.FC<InputCountProps> = ({ item }) => {
    const dispatch = useDispatch()
    const value = useRef(1)


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value <= item.quantity) {
            value.current = +e.target.value
            dispatch(handleAmountCount(item, +e.target.value))
        }
    }

    const onPlus = () => {
        if (value.current < item.quantity) {
            dispatch(handleAmountCount(item, value.current + 1))
            value.current++
        }

    }


    const onMinus = () => {
        if (value.current !== 1) {
            dispatch(handleAmountCount(item, value.current - 1))
            value.current--
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlusButton onClick={onPlus}>+</PlusButton>
            <InputStyled value={item.count} onChange={onChange} type='number' />
            <MinusButton onClick={onMinus}>&ndash;</MinusButton>
        </div>
    )
}

export default InputCount
