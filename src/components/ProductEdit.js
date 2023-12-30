import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const {id} = useParams();
  const[id1,setId]=useState(0);
  const[pname,setPname]=useState("");
  const[price,setPrice]=useState(0.0);
  const navigate=useNavigate();
 
  useEffect(() =>{
    fetch("http://localhost:2222/products/"+id).then((res) =>{
        return res.json();
    }).then((res)=>{
        setId(res.id);
        setPname(res.pname);
        setPrice(res.price);
    }).catch((error) =>{
        alert(error.message);
    })
}, []);
const handleSumbitData=(e)=>{
  e.preventDefault();
  //console.log({pid,pname,price})
  const productData={id1,pname,price};
  fetch("http://localhost:2222/products/"+id1,{
      method:"PUT",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(productData)
  }).then((res)=>{
      alert('Successfully Updated');
      console.log(productData);

      navigate('/');
  }).catch((err)=>{
      alert(err.message)
  });
}
  return (
    <div>
        <h1>PRODUCT UPDATE FORM</h1>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSumbitData}>
          <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title"></div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>PRDOUCTID</label>
                        <input type="text" className="form-control" value={id} onChange={e=>setId(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>PRODUCT NAME</label>
                        <input type="text" className="form-control" value={pname} onChange={e=>setPname(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>PRODUCT PRICE</label>
                        <input type="text" className="form-control" value={price} onChange={e=>setPrice(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-12 mt-2">
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">UPDATE</button>&nbsp;&nbsp;
                        <Link to="/" className="btn btn-danger">BACK</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductEdit
