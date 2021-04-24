import React from 'react';
import { SideBarStyled } from '../styles/components/SideBar';
import { Link } from 'react-router-dom';


const SideBar: React.FC = () => {
    return (
        <SideBarStyled>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>
                            Home
                    </li>
                    </Link>
                    <Link to='/products'>
                        <li>
                            Products
                    </li>
                    </Link>
                    <Link to='/cart'>
                        <li>
                            Cart
                    </li>
                    </Link>
                </ul>
            </nav>
        </SideBarStyled>
    )
}

export default SideBar
