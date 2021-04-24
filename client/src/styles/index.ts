import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`

export const ContentStyled = styled.div`
    width: 1200px;
    height: 800px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
    backdrop-filter: blur(20px);
    border: 2px solid white;
    border-radius: 40px;
    z-index: 499;
   
`

export const Wrapper = styled.div`
    padding-top: 80px;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(252.62deg, #49FDC7 -0.81%, #4284E3 99.99%, #56C9FA 100%);
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 400px;
      height: 350px;
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));  
      border-radius: 100%;
      bottom: -75px;
      left: -75px;
    }
    &::after {
       content: '';
       position: absolute;
       width: 550px;
       height: 500px;
       background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3)); 
       border-radius: 100%;
       top: -150px;
       right: -150px;
    }
`



export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    &:hover {
        cursor: pointer;
        background-color: #fff;
    }
`

export const LinkButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    color: black;
    text-align: center;
    &:hover {
        cursor: pointer;
        background-color: #fff;
    }
`




export const Title = styled.h1`
    margin: 25px 0px;
`

export const FadeInAnimation = keyframes`  
from { opacity: 0; }
to { opacity: 1; }
`;