import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import './SearchResults.css';
import ProductIndexItem from "../ProductIndex/ProductIndexItem";


const SearchResults = () => {
    const dispatch = useDispatch();
    const { searchParams } = useParams();

    // grab all products from the state where the product name or category matches the search parameters
    const products = useSelector(state => {
        return Object.values(state.products).filter(product => product.category.toLowerCase().includes(searchParams.toLowerCase()) ||
            product.name.toLowerCase().includes(searchParams.toLowerCase()))
    })

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const searchHeader = `Showing results for '${searchParams}'...`

    const ProductListItems = products.map((product) => <ProductIndexItem product={product}/>)

    return (
        <>
            <div id="bigContainer">
                <h1 id="indexHeader">{searchHeader}</h1>
                <div id="indexContainer">
                    {ProductListItems}
                </div>
            </div>
        </>
    )
}

export default SearchResults;