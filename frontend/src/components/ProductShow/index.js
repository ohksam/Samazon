import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/products";
import Placeholder from '../../assets/images/Placeholder.jpg';
import './ProductShow.css';

const ProductShow = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    // const product = useSelector((productId) => ({products}) => products ? products[productId] : null);
    const product = useSelector(getProduct(productId));
    // const product = useSelector((productId) => ({products}) => products[productId]);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    if (!product) return null;

    return (
        <div id="productShowDiv">
            <h1 id='productName'>{product.name}</h1>
            <div id="productShowImageDiv">
                <img src={Placeholder} alt='placeholder' />
            </div>
            <div id="productShowDescriptionDiv">
                <li>{product.description}</li>
                <li>Placeholder for </li>
                <li>product details</li>
                <li>perhaps as an</li>
                <li>unordered list</li>
            </div>
            <div id="productAddToCartDiv">
                <p>Placeholder for "add to cart" features</p>
            </div>
        </div>
    )

    return (
        <div id="productShow">
            <div id="productShowLeft">

            </div>
            <div id="productShowMiddle">

            </div>
            <div id="productShowRight">

            </div>

        </div>
    )
}


export default ProductShow;