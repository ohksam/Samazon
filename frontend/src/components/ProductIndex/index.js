import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';
import './ProductIndex.css';

const ProductIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products ? Object.values(state.products) : [])

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const ProductListItems = products.map((product) => <ProductIndexItem product={product}/>)

    return (
        <div id="bigContainer">
        <div id="indexContainer">
            {ProductListItems}
            {/* {category} */}
        </div>
        </div>
    )
}

export default ProductIndex;