// imports
import logo from './images/logo.png'
import cart from './images/cart.png'
import main_bg from './images/image1.png'
import cat_1 from './images/category-1.jpg'
import cat_2 from './images/category-2.jpg'
import cat_3 from './images/category-3.jpg'
import pro_1 from './images/product-1.jpg'
import pro_2 from './images/product-2.jpg'
import pro_3 from './images/product-3.jpg'
import pro_4 from './images/product-4.jpg'
import pro_5 from './images/product-5.jpg'
import pro_6 from './images/product-6.jpg'
import pro_7 from './images/product-7.jpg'
import pro_8 from './images/product-8.jpg'
import pro_9 from './images/product-9.jpg'
import pro_10 from './images/product-10.jpg'
import pro_11 from './images/product-11.jpg'
import pro_12 from './images/product-12.jpg'
import exclusive from './images/exclusive.png'
import user_1 from './images/user-1.png'
import user_2  from './images/user-2.png'
import user_3 from './images/user-3.png'
import logo_1 from './images/logo-coca-cola.png'
import logo_2 from './images/logo-godrej.png'
import logo_3 from './images/logo-oppo.png'
import logo_4 from './images/logo-paypal.png'
import logo_5 from './images/logo-philips.png'
import playstore from './images/play-store.png'
import appstore from './images/app-store.png'
import logo_footer from './images/logo.png'


// Body

const Body = () =>{ 

    return(
        <div className="header">
        <div className = 'container'>
            <div className = 'navbar'>
                <div className = 'logo'>
                    <img src={logo} width = '125px'></img>
                </div>
                <nav>
                    <ul>
                        <li >Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Account</li>
                    </ul>
                </nav>
                <img src = {cart} width = '30px' height = '30px'></img>
            </div>

            <div className='row'>
                <div className='col-2'>
                    <h1>Give your workout <br/> a new style!</h1>
                    <p>Success isn't always about greatness. <br/>It's about consistency.</p>
                    <a href="" class="btn">Explore Now &#8594;</a>
                </div>

                <div class = 'col-2'> 
                    <img src = {main_bg}></img>
                </div>
            </div>

        </div>

        {/* Featured Products */}
        <div className='categories'>
            <div className='container'>
                <div class= 'row'>
                    <div class = 'col-3'>
                        <img src = {cat_1}/>
                    </div>
                    <div class = 'col-3'>
                        <img src = {cat_2}/>
                    </div>
                    <div class = 'col-3'>
                        <img src = {cat_3}/>
                    </div>

                </div>
            </div>
        </div>

        {/* Main Products */}
        <div class = 'small-container'>
            <h2 class= 'title'> Featured Products</h2>
            <div class= 'row'>
                <div class = 'col-4'>
                    <img src = {pro_1}></img>
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
                    <img src={pro_2}/>
                     <h4>Black Running Shoes</h4>
                    <div class="rating">
                         <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                     <i class="fa fa-star" ></i>
                    </div>
                <p>£25.00</p>
                </div>
            
            
                <div class="col-4">
                    <img src={pro_3}/>
                    <h4>UCB Joggers</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£30.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_4}/>
                    <h4>Blue Polo T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£20.00</p>
                </div>

            </div>

            {/* Latest Products */}
            <h2 className='title'> Latest Products </h2>
            <div className='row'>
                <div class="col-4">
                    <img src={pro_5}/>
                    <h4>White Trainers</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£40.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_6}/>
                    <h4>Black T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£20.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_7}/>
                    <h4>Ankle Socks</h4>
                    <div class="rating">
                        <span class="fa fa-star checked"> </span>
                        <span class="fa fa-star checked"> </span>
                        <span class="fa fa-star checked"> </span>
                        <span class="fa fa-star checked"> </span>
                    </div>
                    <p>£10.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_8}/>
                    <h4>Fossil Watch</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£100.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_9}/>
                    <h4>Roadster Watch</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£50.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_10}/>
                    <h4>HRX Shoes</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£40.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_11}/>
                    <h4>HRX Running Shoes</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£42.00</p>
                </div>

                <div class="col-4">
                    <img src={pro_12}/>
                    <h4>Nike Joggers</h4>
                    <div class="rating">
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                        <i class="fa fa-star" ></i>
                    </div>
                    <p>£67.00</p>
                </div>
            </div>

        </div>  {/* small-container div element*/ }

        {/*Offers*/}
        <div class="offer">
        <div class="small-container">
            <div class="row">
                <div class="col-2">
                    <img src={exclusive} class="offer-img"/>
                </div>
                <div class="col-2">
                    <p>Exclusively available on Sportswear Store</p>
                    <h1>Smart Band 4</h1>
                    <small>The Mi Smart Band 4 features a 39.9% larger (than Mi band 3) AMOLED color full-touch display with adjustable brightness, 
                        so everything is clear as can be.</small>
                    <a href="" class="btn">Buy Now &#8594;</a>
                </div>
            </div>
        </div>
        </div>

        {/*Testimonials*/}
        <div class="testimonial">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <i class = "fa fa-quote-left"></i>
                    <p>he Mi Smart Band 4 features a 39.9% larger (than Mi band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be</p>

                    <img src={user_1}/ >
                    <h3>Sean Parker</h3> 

                </div>
                <div class="col-3">
                    <i class = "fa fa-quote-left"></i>
                    <p>he Mi Smart Band 4 features a 39.9% larger (than Mi band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be</p>

                    <img src={user_2} />
                    <h3>Sean Parker</h3> 

                </div>
                <div class="col-3">
                    <i class = "fa fa-quote-left"></i>
                    <p>The Mi Smart Band 4 features a 39.9% larger (than Mi band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be</p>

                    <img src={user_3}/>
                    <h3>Sean Parker</h3> 

                </div>
            </div>
        </div>
     </div>

     {/*Brands*/}
     <div class="brands">
        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src={logo_1}/>
                </div>
                <div class="col-5">
                    <img src={logo_2}/>
                </div>
                <div class="col-5">
                    <img src={logo_3}/>
                </div>
                <div class="col-5">
                    <img src={logo_4}/>
                </div>
                <div class="col-5">
                    <img src={logo_5}/>
                </div>
            </div>
        </div>
     </div>
    
        
        </div> 

       




    );

}

export default Body;