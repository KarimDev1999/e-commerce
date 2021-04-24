import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import useInput from '../hooks/useInput'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { addComment, removeComment } from '../redux/actions/product'
import { Button, LinkButton } from '../styles'
import { IComment, IProduct } from '../types/product'
import { ICartItem } from '../types/cart';
import { addToCart } from '../redux/actions/cart'
import { Link } from 'react-router-dom'

interface RouteParams {
    id: string;
}


const ProductPage = () => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { currentUser } = useTypedSelector(({ auth }) => auth);
    const { items } = useTypedSelector(({ cart }) => cart);
    const query = useInput('');
    const dispatch = useDispatch();
    const { id } = useParams<RouteParams>();



    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then(({ data }) => {
            setProduct(data)
        })
    }, [])

    const leaveComment = () => {
        if (currentUser && product) {
            const comment = {
                username: currentUser.username,
                comment: query.value,
                product: product._id,
                user: currentUser._id
            }
            dispatch(addComment(comment, setProduct, product))
        }

    }

    const deleteComment = (commentId: string) => {
        if (currentUser && product) {
            dispatch(removeComment(commentId, setProduct, product))
        }
    }

    const addProductToCart = (item: ICartItem) => {
        dispatch(addToCart(item))
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <img style={{ maxWidth: '450px' }} src={product ? 'http://localhost:5000/' + product.image : undefined} alt="image" />

                <div style={{ alignSelf: 'center' }}>
                    <h3>{product && product.name}</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda numquam minus ratione at a perferendis dolor iusto id, exercitationem beatae? Voluptate distinctio autem placeat aperiam excepturi cum quod reprehenderit doloremque blanditiis provident, illo inventore accusantium dolorum a dolor dolores similique aliquam ex eveniet vel! Ratione repellat, voluptatibus, consectetur ducimus ea illum unde laudantium facere praesentium fugiat iusto aspernatur veritatis labore distinctio at eveniet! Quia possimus ducimus eligendi voluptatibus consequatur voluptatem ullam officia facilis doloremque deleniti autem ad maxime perspiciatis mollitia eveniet fuga dolor non, quibusdam laudantium expedita esse tempore temporibus harum velit. Officia odit eaque molestias quod esse velit?</p>
                    {product &&
                        items.some(item => item._id === product._id)
                        ?
                        <Link onClick={(e) => e.stopPropagation()} to='/cart'>
                            <LinkButton>already in cart</LinkButton>
                        </Link>
                        :
                        <Button onClick={() => product && addProductToCart({ ...product, totalItemPrice: 0, count: 0 })}>В корзину</Button>

                    }
                </div>
            </div>
            <div >
                <div style={{ marginBottom: '10px', width: '50%' }}>
                    <h1>Comments</h1>
                    <textarea {...query} placeholder='Leave a comment' style={{ width: '100%', resize: 'none', padding: '5px 5px' }} name="comment" rows={5} />
                    <Button style={{ marginLeft: 'auto' }} onClick={leaveComment}>Отправить</Button>
                </div>
                <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
                    <ul>
                        {product?.comments?.map((comment: IComment) => currentUser && comment.user === currentUser._id
                            ?
                            <li style={{ border: '1px solid #fff', display: 'flex', alignItems: 'center', maxWidth: '70%', borderRadius: '10px', padding: '5px', justifyContent: 'space-between' }} key={comment._id}>
                                <div>
                                    <h3>{comment.username}</h3>
                                    <p>{comment.comment}</p>
                                </div>
                                <Button onClick={() => deleteComment(comment._id)} style={{ width: '25px', height: '25px', display: 'inline-block', padding: '0' }}>X</Button>
                            </li>
                            :
                            <li key={comment._id}><div style={{ border: '1px solid #fff', maxWidth: '70%', borderRadius: '10px', padding: '5px' }}><h3>{comment.username}</h3>{comment.comment}</div></li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductPage
