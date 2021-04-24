import styled from 'styled-components';




export const ProductsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`


export const ProductCardStyled = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 0px 15px 15px 0px;
    max-height: 350px;
    background-color: rgba(255, 255, 255, .4);
    flex: 0 1 calc(25% - 15px);
    border-radius: 10px;
    box-shadow: 0px -1px 9px 3px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    &:hover {
        transform: scale(1.03)
    }
    span {
        font-size: 13px;
        color: #333;
    }
`

export const ProductCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 15px;
    margin-top: auto;
    margin-bottom: 5px;
`
export const AlreadyInCartButton = styled.div`

`

export const ProductImgStyled = styled.div`
    max-width: 150px;
    max-height: 120px;
        img {
        width: 100%;
        height: 100%
        }
`

interface LikeProps {
    readonly active: boolean | null
}

export const LikeStyled = styled.div<LikeProps>`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    img {
        background-color: ${props => props.active ? 'red' : null};
        border-radius: 10px;
        &:hover { 
            background-color: #fff;
            cursor: pointer;
        }
        width: 100%;
        height: 100%;
    }

`

export const AddToCartImg = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    &:hover { 
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 100%;
    }
`
