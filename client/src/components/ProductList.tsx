import React, { Dispatch, useEffect, useState } from 'react'
import { ProductsRow } from '../styles/components/ProductList';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchProducts } from '../redux/actions/product';
import { useDispatch } from 'react-redux';
import LoadingCard from './LoadingCard';
//components
import ProductCard from './ProductCard';
import Paginator from './Paginator';
//components 

const ProductList: React.FC = () => {
    const { products, error, loading } = useTypedSelector(({ products }) => products);
    const [page, setPage] = useState<number>(1);
    const dispatch = useDispatch<Dispatch<any>>()

    useEffect(() => {
        dispatch(fetchProducts(page))
    }, [page])


    if (error) {
        return <h1>что-то пошло не так</h1>
    }

    return (
        <>
            <ProductsRow>
                {!loading ? products.map(product => <ProductCard key={product._id} product={product} />) : Array(8).fill(null).map((_, i) => <div key={i} style={{ margin: '0px 15px 10px 0px' }}><LoadingCard /></div>)}
            </ProductsRow>
            <Paginator page={page} setPage={setPage} />
        </>
    )
}

export default ProductList
