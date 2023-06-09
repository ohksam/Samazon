import { useLocation } from 'react-router-dom';
import whiteSamazonLogo from '../../assets/images/WhiteSamazon.png';
import './Footer.css';

const Footer = () => {
    const location = useLocation();


    if (location.pathname.includes('signup') || location.pathname.includes('login')) {
        return null
    } else {
        return (
            <div id="footer">
                <div id="upper-bar"></div>

                <p>Created By Sam Oh</p>

                <ul id="technology-list">Languages used:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <ul id="technology-list">Technologies/Frameworks Used:
                    <li>React</li>
                    <li>Rails</li>
                </ul>

                <div id="lower-bar"></div>

                <p id="copyright">
                    This project uses the likeness of and images from Amazon. No copyright intended.
                </p>
                {/* {whiteSamazonLogo} */}
            </div>
        )
    }
}

export default Footer;