import React, { useEffect, useState } from 'react'
import { InputStyled, PlusButton, MinusButton } from '../styles/components/Cart';
import { useDispatch } from 'react-redux';
import { handleAmountCount } from '../redux/actions/cart';
import { ICartItem } from '../types/cart';

export interface InputCountProps {
    item: ICartItem
}


const InputCount: React.FC<InputCountProps> = ({ item }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(0)


    useEffect(() => {
        dispatch(handleAmountCount(item, value))
    }, [value])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value <= item.quantity) {
            setValue(+e.target.value)
        }
    }

    const onPlus = () => {
        if (value < item.quantity) {
            setValue(prev => prev + 1)
        }

    }
    
    const onMinus = () => {
        if (value !== 1) {
            setValue(prev => prev - 1)
        }
    }
    
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlusButton onClick={onPlus}>+</PlusButton>
            <InputStyled value={value} onChange={onChange} type='number' />
            <MinusButton onClick={onMinus}>&ndash;</MinusButton>
        </div>
    )
}

export default InputCount
