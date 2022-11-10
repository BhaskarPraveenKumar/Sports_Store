// Imports
import Header from './Header';
import Footer from './footer';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () =>{

    const [data,setData] = useState([]);

    useEffect(()=>{

        const reqAPI = "http://localhost:8082/products/all";

        axios.get(reqAPI).then((res)=>{
            console.log(res);
            setData(res.data);
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div>

            <Header/>


                    <div className="small-container">. {/* Shortlist*/}
                    <div className="row row-2">
                        <h2>All Products</h2>
                        <select>
                            <option >Default Shorting</option>
                            <option >Sort by Price</option>
                            <option >Sort by popularity</option>
                            <option >Sort by rating</option>
                            <option >Sort by sale</option>
                        </select>
                    </div>
                    </div>

                    {/* All products rows and columns*/}
                    <div className = 'row'>


                   {data.map((value,index)=>{
                    return(

                        <div className="col-4" key={index}>
                            <Link to={value._id}><img src={value.link} alt={value.Subname}/></Link>
                            <h4>{value.Name}</h4>
                            <h5>{value.Subname}</h5>
                                <div className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                </div>
                            <p>£{value.price}</p>
                        </div>

                    )
                   })}     
                   
                        
                

                            <div className="page-btn">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>&#8594</span>
                            </div>
                    </div> {/* All products row div element */}

        <Footer/>

        </div> /* Returns div element*/

        
    )
}

export default Product;