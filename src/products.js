// Imports


// All Product_details
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
            <img src="images/cart.png" width="30px" height="30px"/>
            <img src="images/menu.png" class="menu-icon" onclick="menutoggle()"/>
        </div>
        
    </div>

     <div class="small-container">
        <div class="row row-2">
            <h2>All Products</h2>
            <select>
                <option >Default Shorting</option>
                <option >Sort by Price</option>
                <option >Sort by popularity</option>
                <option >Sort by rating</option>
                <option >Sort by sale</option>
            </select>
        </div>
        
        <div class = 'row'>
            <div class="col-4">
                <img src="images/product-1.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-2.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-3.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-4.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            
        </div>
        <div class = 'row'>
            <div class="col-4">
                <img src="images/product-5.jpg">
                <h4>Red T-Shirt</h4>
                <div class="rating">/
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-6.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-7.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-8.jpg"/>
                <h4>Red T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    


                </div>
                <p>£50.00</p>
            </div>
            <div class = 'row'>
                <div class="col-4">
                    <img src="images/product-9.jpg"/>
                    <h4>Red T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        
    
    
                    </div>
                    <p>£50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-10.jpg"/>
                    <h4>Red T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        
    
    
                    </div>
                    <p>£50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-11.jpg"/>
                    <h4>Red T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        
    
    
                    </div>
                    <p>£50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-12.jpg"/>
                    <h4>Red T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        
    
    
                    </div>
                    <p>£50.00</p>
                </div>
                <div class="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594</span>
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
export default products;