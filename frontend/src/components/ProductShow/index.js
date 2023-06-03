import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/products";
import Placeholder from '../../assets/images/Placeholder.jpg';
import './ProductShow.css';
import { useHistory } from 'react-router-dom';

const ProductShow = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    if (!product) return null; //or return 'product not found :('

    const descriptionList = product.description.split('.');
    const descriptionListItems = descriptionList.map((sentence) => <li>{sentence}</li>)

    // const handleAddToCart = (e) => {
    //     e.preventDefault();

    //     if (!sessionUser) {
    //         history.push('/login')
    //     } else {
    //         const theProduct = {quantity, user_id, product_id};
    //         dispatch(addCartItem(theProduct));
    //         history.push('/cart')
    //     }
    // }

    return (
        <div id="productShowPage">
            <div id="productShowDiv">
                <div id="productShowLeft">
                  <div id="productShowImageDiv">
                      <img src={Placeholder} alt='placeholder' />
                  </div>
                </div>
                <div id="productShowMiddle">
                  <div id="productShowInfo">
                    <h1 id='productName'>{product.name}</h1>
                    <h2 id='productRating'>product.rating</h2>
                    <hr id='midDivide'></hr>
                    <h2 id='productPrice'>${product.price}</h2>
                  </div>
                  <div id="productShowDescriptionDiv">
                    {descriptionListItems}
                  </div>
                </div>
                <div id="productShowRight">
                  <div id="productAddToCartDiv">
                    <h1 id='productPrice'>${product.price}</h1>
                    <p>FREE returns</p>
                    <p>FREE shipping</p>

                    <form id='productShowForm' onSubmit={(e) => e.preventDefault()}> 

                      <button id='addToCartButton'>Add to Cart</button>
                    </form>
                    <button id='buyNowButton'>Buy Now</button>
                  </div>
                </div>
            </div>

            <hr id="productShowDivider"></hr>

            <div id="productRatingDiv">
              <h1>Customer reviews</h1>
            </div>
        </div>
    )
}


export default ProductShow;