import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"
const Footer =() =>{
    return (
        <footer>
            <div className="footer container">
                <div className="footer-section">
                    <p className="title">FoodiesHub.com</p>
                    <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                    <p>&copy; 2023 | All Rights Reserved</p>
                </div>
                <div className="footer-section">
                    <p className="title">Contact Us</p>
                    <p>foodieshub@gmail.com</p>
                    <p>+977 01-41448201</p>
                    <p>kapan kathamandu Nepal</p>
                </div>
                <div className="footer-section">
                    <p className="title">Socials</p>
                    <a href="www.facebook.com"><p>Facebook <FontAwesomeIcon icon={faFacebook} /></p></a>
                    <a href="www.twitter.com"><p>Twitter <FontAwesomeIcon icon={faTwitter} /></p></a>
                    <a href="www.instagram.com"><p>Instagram <FontAwesomeIcon icon={faInstagram} /></p></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer