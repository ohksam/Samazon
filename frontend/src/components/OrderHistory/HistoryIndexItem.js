import { Link } from "react-router-dom";
import Placeholder from '../../assets/images/Placeholder.jpg';


const HistoryIndexItem = ({ cartItem }) => {
    const cartImage = cartItem.product.photoUrl || Placeholder;

    const updatedAt = cartItem.updatedAt;
    const parsed = new Date(updatedAt);
    const formattedDate = parsed.toLocaleDateString();

    return (
        <>
            <div id='cartItemContainer'>
                <div id='cartItemImageContainer'>
                    <Link to={`/products/${cartItem.productId}`}>
                        <img id="cartImg" src={cartImage} alt='cartItemImage' />
                    </Link>
                </div>
                <div id='cartItemEditOptions'>
                    <Link id='cartItemName' to={`/products/${cartItem.productId}`}>
                        {cartItem.product.name}
                    </Link>
                    <div>Qty: {cartItem.quantity}</div>
                    <div>Ordered on: {formattedDate}</div>
                </div>
                <div id='quantityTimesPrice'>
                    Unit cost: ${cartItem.product.price}
                </div>
            </div>
            <hr id='cartItemDividers'></hr>
        </>
    )
}

export default HistoryIndexItem;