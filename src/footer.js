// Imports
import logo from './images/logo.png'
import cart from './images/cart.png'
import menu from './images/menu.png'
import buy_1 from './images/buy-1.jpg'
import buy_2 from './images/buy-2.jpg'
import playstore from './images/play-store.png'
import appstore from './images/app-store.png'
import './App.css';
import logo_footer from './images/logo.png'

// Body
const Footer = () =>{

    return(
        <div >
            
            {/*Footer*/}
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col-1">
                                <h3>Dowload Our App</h3>
                                <p>Download App for Andriod and ios mobile phone.</p>
                                <div className="app-logo">
                                    <img src={playstore}/>
                                    <img src={appstore}/>
                                </div>
                            </div>
                            <div className="footer-col-2">
                                <img src={logo_footer} />
                                <p>Our Purpose Is To Sustainably Make The Pleasure and Benefits of Sports Accessible to the Many.</p>
                            </div>
                            <div className="footer-col-3">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>Coupons</li>
                                    <li>Blog Post</li>
                                    <li>Return Policy</li>
                                    <li>Join Affiliate</li>
                                </ul>
                            </div>
                            <div className="footer-col-4">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Youtube</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <p className="copyright"> Copyright 2022 - Sportswear Store</p>
                    </div>
                </div>
        </div>

        

    );
}


// Exports
export default Footer;