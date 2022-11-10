// Imports
import logo from './images/logo.png'
import cart from './images/cart.png'
import './App.css';
import { Link } from 'react-router-dom'

// Body
const Header = () =>{

    return(
        <div className="container">
            
            <div className="container">
                <div className = 'navbar'>

                    <div className = 'logo'>
                        <img src={logo} width="125"/>
                    </div>

                    <nav>
                        <ul className="MenuItems">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={"/products"}>Products</Link></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Account</a></li>
                        </ul>
                    </nav>

                    <img src = {cart} height="30px"/>

                </div>               
            </div>

        </div>

        

    );
}


// Exports
export default Header;