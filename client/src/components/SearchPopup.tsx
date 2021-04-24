import React, { useEffect, useRef } from 'react'
import { PopupStyled } from '../styles/components/Search';
import { IProduct } from '../types/product';
import { useHistory } from 'react-router';

export interface PopupProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    data: IProduct[];
    popupRef: any;
}


const SearchPopup: React.FC<PopupProps> = ({ visible, data, setVisible, setQuery, popupRef }) => {
    const history = useHistory();


    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IProduct) => {
        history.push('/products/' + item._id);
        setVisible(false);
        setQuery('');
    }

    return (
        visible ? <PopupStyled ref={popupRef}>
            <ul >
                {
                    data.length ?
                        data.slice(0, 5).map(item => <li onClick={(e) => handleClick(e, item)} key={item._id}><img src={'https://e-commerce-test-app.herokuapp.com/' + item.image} alt="img" />{item.name}</li>)
                        : <li>ничего не найдено</li>
                }
            </ul>
        </PopupStyled> : null
    )
}

export default SearchPopup
