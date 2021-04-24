import React from 'react'
import { ProductCardStyled, LikeStyled, ProductImgStyled, AddToCartImg, ProductCardBottom } from '../styles/components/ProductList';
import { LinkButton } from '../styles/index';
import { IProduct } from '../types/product';
import { useDispatch } from 'react-redux';
import likeImg from '../assets/images/heart.svg';
import addToCartImg from '../assets/images/free-icon-add-cart-967506.svg';
import { addToCart } from '../redux/actions/cart';
import { ICartItem } from '../types/cart';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { like, unlike } from '../redux/actions/product';

interface ProductCardProps {
    product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { items } = useTypedSelector(({ cart }) => cart);
    const { currentUser } = useTypedSelector(({ auth }) => auth)

    const addProductToCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: ICartItem) => {
        e.stopPropagation()
        dispatch(addToCart(item))
    }

    const handleLike = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        if (currentUser) {
            if (!product.likes.includes(currentUser._id)) {
                dispatch(like(currentUser._id, product._id))
            }
            else {
                dispatch(unlike(currentUser._id, product._id))
            }
        }

    }

    return (
        <ProductCardStyled onClick={() => history.push('products/' + product._id)}>
            <ProductImgStyled style={{ margin: '20px 0px' }}>
                <img src={'https://e-commerce-test-app.herokuapp.com/' + product.image} alt="image" />
            </ProductImgStyled>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ color: 'navy' }}>Name - {product.name}</span>
                <span>
                    <span>{product.comments.length} comments</span>
                </span>
                <strong>{product.price} $</strong>
                <span>quantity - {product.quantity}</span>
            </div>
            <ProductCardBottom>
                {
                    items.some(item => item._id === product._id)
                        ?
                        <Link onClick={(e) => e.stopPropagation()} to='/cart'>
                            <LinkButton>already in cart</LinkButton>
                        </Link>
                        :
                        <AddToCartImg onClick={(e) => addProductToCart(e, { ...product, totalItemPrice: 0, count: 0 })}>
                            <img src={addToCartImg} alt="cart" />
                        </AddToCartImg>
                }


                <LikeStyled active={currentUser && product.likes.includes(currentUser._id)} onClick={handleLike}>
                    {product.likes.length}
                    <img src={likeImg} alt="like" />
                </LikeStyled>
            </ProductCardBottom>
        </ProductCardStyled>
    )
}

export default ProductCard
