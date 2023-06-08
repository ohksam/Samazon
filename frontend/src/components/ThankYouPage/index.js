import { NavLink } from "react-router-dom";

const ThankYouPage = () => {





    return (
        <>
        {/* grey background like cart, white div for message */}
        <h1>(some check logo/picture)Order placed, thanks!</h1>
        <p>Estimated delivery: </p>
        <div>(images of just-purchased items)</div>
        <NavLink to='/history'>View recent orders</NavLink>

        <button>Continue shopping</button>
        </>
    )
}






export default ThankYouPage;