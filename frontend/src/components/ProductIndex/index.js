import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';
import './ProductIndex.css';

const ProductIndex = ({category}) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products ? Object.values(state.products) : [])

    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [category])

    const ProductListItems = products.map((product) => <ProductIndexItem product={product}/>)

    return (
        <div id="indexContainer">
            {ProductListItems}
            {/* {category} */}
        </div>
    )
}


export default ProductIndex;