import axios from 'axios';
import React, { useState, useRef } from 'react';
import useDebounce from '../hooks/useDebounce';
import usePopup from '../hooks/usePopup';
import { SearchInput, SearchWrapper } from '../styles/components/Search';
import { IProduct } from '../types/product';
import SearchPopup from './SearchPopup';

const Search: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<IProduct[]>([]);
    const { visible, setVisible, ref } = usePopup();
    const debounce = useDebounce(onSearch, 1000);

    function onSearch(query: string) {
        axios.get(`https://e-commerce-test-app.herokuapp.com/api/products/search?query=${query}`).then(({ data }) => {
            setData(data)
            setVisible(true)
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        debounce(e.target.value)
    }

    return (
        <SearchWrapper>
            <SearchInput value={query} onChange={onChange} placeholder='Поиск по сайту' type="text" />
            <SearchPopup popupRef={ref} setQuery={setQuery} setVisible={setVisible} data={data} visible={visible} />
        </SearchWrapper>
    )
}

export default Search
