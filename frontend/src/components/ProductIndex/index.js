import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';
import './ProductIndex.css';
import { useParams } from 'react-router-dom';

const ProductIndex = () => {
    const dispatch = useDispatch();
    const {categoryName} = useParams();
    // const products = useSelector((state) => state.products ? Object.values(state.products) : [])
    const products = useSelector(state => {
        return Object.values(state.products).filter(product => product.category === categoryName)
    })

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