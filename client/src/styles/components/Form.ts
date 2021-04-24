import styled from 'styled-components';



export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    h1 {
        margin-bottom: 15px;
    }
`

export const FormStyled = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 350px;
    border: 2px solid #fff;
    label {
        margin-bottom: 5px;
    }
    input {
        padding: 10px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 10px;
        font-size: 18px; 
        margin-bottom: 10px;
    }
    input[type='submit'] {
        cursor: pointer;
        margin-top: auto;
    }

`