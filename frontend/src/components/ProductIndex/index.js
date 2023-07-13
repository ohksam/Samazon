import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';
import './ProductIndex.css';
import { useParams } from 'react-router-dom';

const ProductIndex = () => {
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    // const products = useSelector((state) => state.products ? Object.values(state.products) : [])
    const products = useSelector(state => {
        return Object.values(state.products).filter(product => product.category === categoryName)
    })

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const categoryString = categoryName.toString();
    const categoryHeader = categoryString.charAt(0).toUpperCase() + categoryString.slice(1);


    const ProductListItems = products.map((product) => <ProductIndexItem product={product} />)

    return (
        <>
            <div id="bigContainer">
                <h1 id="indexHeader">{categoryHeader}</h1>
                <div id="indexContainer">
                    {ProductListItems}
                </div>
            </div>
        </>
    )
}

export default ProductIndex;