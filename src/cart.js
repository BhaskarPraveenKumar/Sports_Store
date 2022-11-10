// Imports


// Cart_details
const Header = () =>{

    return(
        <div>
            <div class="container">
        <div class = 'navbar'>
            <div class = 'logo'>
                <img src="images/logo.png" width="125px"/>
            </div>
            <nav>
                <ul id = "MenuItems">
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Account</a></li>
                </ul>
            </nav>
            <img src = {cart} height="30px"/>
            <img src={menu} class="menu-icon" onclick="menutoggle()"/>
        </div>
        
    </div>


    <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={buy_1} />
                        <div>
                            <p>Red Printed Tshirt</p>
                            <small>Price:$50.00 </small>
                            <br/>
                            <a href=""> Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={buy_}/>
                        <div>
                            <p>Red Printed Tshirt</p>
                            <small>Price:$30.00 </small>
                            <br/>
                            <a href=""> Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>$30.00</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$200.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    <td>Subtotal</td>
                    <td>$235.00</td>
                </tr>
            </table>
        </div>
    </div>

  
     <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Dowload Our App</h3>
                    <p>Download App for Andriod and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src="images/play-store.png"/>
                        <img src="images/app-store.png"/>
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src="images/logo.png"/ >
                    <p>Our Purpose Is To Sustainably Make The Pleasure and Benefits of Sports Accessible to the Many.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            
            <p class="copyright"> Copyright 2022 - Sportswear Store</p>
        </div>
     </div>

        </div>
        

    );
}


// Exports
export default cart;