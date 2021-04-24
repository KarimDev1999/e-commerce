import styled from 'styled-components';


export const SideBarStyled = styled.div`
    width: 400px;
    height: 800px;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
    margin-right: 80px;
    backdrop-filter: blur(20px);
    border: 2px solid white;
    border-radius: 40px;
    padding: 25px 0px;
    ul {
        list-style: none;
        text-align: center;
        li {
            color: #4284E3;
            font-size: 55px;
            &:hover {
                background-color: rgba(255,255,255, .3);
                cursor: pointer;
            }
        }
    }
`