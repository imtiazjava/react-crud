import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
 const[productData,setProductData]=useState({});

 useEffect(() =>{
        fetch("http://localhost:2222/products/"+id).then((res) =>{
            return res.json();
        }).then((res)=>{
          setProductData(res);
           //console.log(res);
        }).catch((error) =>{
            alert(error.message);
        })
  }, []);
    return (
    <div>
        <h1>Product Details</h1>   
          <div className="card" style={{"textAlign":"left"}}>
                   <div className="card-title">
                        <h2>Product Details</h2>

                   </div>
                   <div className="card-body">
                      { productData &&
                          <div>
                              <h3>Employee ID:{productData.id}</h3><br/>
                              <h3>Employee NAME:{productData.pname}</h3><br/>
                              <h3>Employee PRICE:{productData.price}</h3>
                              <Link to="/">Back</Link>
                          </div>
                      }
                   </div>
          </div>
    </div>
  )
}

export default ProductDetails
