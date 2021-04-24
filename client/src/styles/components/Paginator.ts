import styled from 'styled-components';


export const PaginatorStyled = styled.div`
    width: 750px;
    height: 30px;
    background-color: #fff;
    display: flex;
    margin: auto auto 0 auto;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 10px;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        list-style: none;
        position: relative;
    }
`


export const NumberStyled = styled.li`
    height: 100%;
    padding: 5px 0px;
    width: 50px;
    text-align: center;
    border-radius: 10px;
        &:hover {
            cursor:pointer;
            background-color: #fff;
        }
`


export const NextButton = styled.button`
        width: 100px;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        border-radius: 10px;
        border: 1px solid #fff;
  
        &:hover {
            border: 1px solid lightgrey;
            background-color: #fff;
        }
`

export const PrevButton = styled.button`
        width: 100px;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        border: 1px solid #fff;
        border-radius: 10px;
        &:hover {
            border: 1px solid lightgrey;
            background-color: #fff;
        }
`