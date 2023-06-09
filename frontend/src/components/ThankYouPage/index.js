import { NavLink } from "react-router-dom";
import './ThankYouPage.css'

const ThankYouPage = () => {


    return (
        <div id="thank-you-page">
            <div id="thank-you-content">
                <h1 id="thank-you-title">Got it, thanks!</h1>
                <p class="thank-you-text">Your order has been placed successfully.</p>
                <p class="thank-you-text">An email confirmation has been sent to your registered email address.</p>
                <p class="thank-you-text">Estimated delivery: <span id="thank-you-date">Junuary 48, 2029</span></p>
            </div>
            <div id="thank-you-footer">
                &copy; 2023 Samazon 
            </div>
            <div id="thankYouHistoryLink">

            </div>
        </div>
    )
}






export default ThankYouPage;