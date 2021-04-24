import React, { useState } from 'react';
import { PaginatorStyled, NumberStyled, NextButton, PrevButton } from '../styles/components/Paginator';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NUMBER_LIMIT: number = 10

interface PaginatorProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Paginator: React.FC<PaginatorProps> = ({ setPage, page }) => {
    const { total } = useTypedSelector(({ products }) => products);
    const [firstNumber, setFirstNumber] = useState<number>(0)
    const [lastNumber, setLastNumber] = useState<number>(NUMBER_LIMIT)

    const numbers: number[] = [];
    for (let i = 0; i < Math.ceil(total / 8); i++) {
        numbers.push(i + 1)
    }

    const next = () => {
        if (lastNumber < numbers.length) {
            setLastNumber((prev) => prev + NUMBER_LIMIT)
            setFirstNumber((prev) => prev + NUMBER_LIMIT)
        }
    }


    const prev = () => {
        if (firstNumber !== 0) {
            setLastNumber((prev) => prev - NUMBER_LIMIT)
            setFirstNumber((prev) => prev - NUMBER_LIMIT)
        }
    }

    return (
        <PaginatorStyled>
            <PrevButton onClick={prev}>prev</PrevButton>
            <ul>
                {
                    numbers.slice(firstNumber, lastNumber).map((number, i) =>
                        <NumberStyled style={{ border: `${number === page ? '1px solid #fff' : ''}` }} onClick={() => setPage(number)} key={i} >{number}</NumberStyled>
                    )
                }
            </ul>
            <NextButton onClick={next}>next</NextButton>

        </PaginatorStyled>
    )
}

export default Paginator
