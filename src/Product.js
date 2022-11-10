// Imports
import Header from './Header';
import Footer from './footer';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () =>{

    const [info,setInfo]         = useState([]);
    const [display,setDisplay]   = useState(false);
    const [display2,setDisplay2] = useState(false);

    useEffect(()=>{

        // const reqAPI = "http://localhost:8082/products/all";
        const reqAPI = "https://sports-wear-athlets-choice-api.netlify.app/.netlify/functions/apiproducts/all"

        axios.get(reqAPI).then((res)=>{
            console.log(res);
            setInfo(res.data);
            console.log(info);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    // Methods
    const dataAdded = async(event) =>{

        event.preventDefault();

        const eventTarget = event.target;

        const obj ={
            Name       : eventTarget.name.value,
            Subname    : eventTarget.subname.value,
            Category   : eventTarget.category.value,
            link       : eventTarget.link.value,
            description: eventTarget.description.value,
            price      : eventTarget.price.value
        }


        const dataSent = await axios.post('https://sports-wear-athlets-choice-api.netlify.app/.netlify/functions/api/products/create',obj);

        setInfo(dataSent.data);

        setDisplay2(!display2);

        console.log(dataSent.data);

            eventTarget.name.value          = " ";
            eventTarget.subname.value       = " ";
            eventTarget.category.value      = " ";
            eventTarget.link.value          = " ";
            eventTarget.description.value   = " ";
            eventTarget.price.value         = " ";
        

    }

    const displayHandler = () =>{

        const cond = !display;
        console.log(cond);
        setDisplay(cond);
    }

    const twoDisplay = () =>{

        const cond = !display2;
        console.log(cond);
        setDisplay2(cond);

    }

    return(
        <div>

            <Header/>

            {display2 && (
                <div className='alert-box'>
                    <h4>Data added</h4>
                    <button onClick={twoDisplay}>Done</button>
                </div>
            )}

            {display ? (
                            <div class="form-div">
                                <button onClick={displayHandler}> &#9587; </button><br/><br/><br/>

                                    <form onSubmit={dataAdded} className="form">

                                        <input type="text"  name="name"     placeholder='Name' required/><br/>
                                        <input type="text"  name="subname"  placeholder='SubName' required/><br/>
                                        <input type="text"  name="category" placeholder='Category' required/><br/>
                                        <input type="text"  name="link" placeholder='Image Link' required/><br/>
                                        <textarea type="text"  name="description" placeholder='Description' required/><br/>
                                        <input type="number"  name="price" placeholder='Price' required/><br/>


                                        <input type="submit" value="Submit"/>

                                    </form>
                            </div>

                        ):(
                            <div>
                            <div className="small-container">. {/* Shortlist*/}
                    <div className="row row-2">
                        <h2>All Products</h2>
                        <button class="btn" onClick={displayHandler}> Add Products </button>

                       
                       
                        
                    </div>
                    </div>


                    <div className = 'row'>


                   {info.map((value,index)=>{
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
                   
                        
                

                          
                    </div> 
                    </div>
                        )}


                    

        <Footer/>

        </div> /* Returns div element*/

        
    )
}

export default Product;