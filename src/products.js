// Imports
import './App.css';
import Header from './Header';
import Footer from './footer';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// All Product_details
const Products = () =>{

    const params = useParams();

    console.log(params.id);

    const [info,setInfo] = useState({});

    useEffect(()=>{

        const reqAPI = `https://sports-wear-athlets-choice-api.netlify.app/.netlify/functions/api/products/${params.id}`;

        axios.get(reqAPI).then((res)=>{
            console.log(res.data);
            setInfo(res.data);
            console.log(info);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div>

            <Header/>

                            <div className="small-container single-product">
                            <div className="row">
                                <div className="col-2">
                                    
                                <img src={info.link} width="100%" id = 'ProductImg'/>
                                </div>
                            </div>


                            <div className="col-2">
                                <p>Home/ {info.Category}</p>
                                <h1>{info.Name}</h1>
                                <h4>£{info.price}.00</h4>
                                <select >
                                    <option > Select Size</option>
                                    <option > S</option>
                                    <option > M</option>
                                    <option > L</option>
                                    <option > XL</option>
                                    <option > XXL</option>
                                </select>
                                <input type="number" value ='1'/>
                                <a href="" className = 'btn'>Add to cart</a>
                                <h3>Product Details</h3>
                                <br/>
                                <p>{info.description} </p>

                            
                        </div>
                    
                    </div>

        <Footer/>

        </div>

    );
    
}


export default Products;