import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 65px;
    height: 80px;
    backdrop-filter: blur(20px);
    background:linear-gradient(to right bottom, rgba(255,255, 255, 0.3), rgba(255, 255, 255, 0.2));
    z-index: 500;
  
`
export const CartIconStyled = styled.div`
    position: relative;
    width: 75px;
    height: 75px;
    padding: 15px;
    color: #4284E3;
    &:hover {
        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
        border-radius: 50px;
        cursor: pointer;
    }
`

export const CartCounter = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 7px;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7));  
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 20px;
`

export const CartImg = styled.img`
    width: 100%;
    heigth: 100%;
`


export const CartLogo = styled.div`
    color: #4284E3;
    font-size: 45px;
`