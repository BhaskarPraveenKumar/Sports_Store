// Imports
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './footer';

// Cart_details
const Cart = () =>{

    return(
        <div className="container">
            <Header/>
           


                <div className="small-container cart-page">
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="" />
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
                                <div className="cart-info">
                                    <img src=""/>
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
                    <div className="total-price">
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

            
               <Footer/>

        </div>
        

    );
}


// Exports
export default Cart;