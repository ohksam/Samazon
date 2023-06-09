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

                <ul id="technology-list">Languages used:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

                <div id="lower-bar"></div>

                <p id="copyright">
                    No copyright intended.
                </p>
                {/* {whiteSamazonLogo} */}
            </div>
        )
    }
}

export default Footer;