import React, { useEffect} from 'react'
import { useParams, navigate, useNavigate } from 'react-router-dom';

const ProductDelete = () => {
  const {id} = useParams(); 
  
  const navigate=useNavigate();
    if(window.confirm('Are you sure you want to delete')){
      fetch("http://localhost:2222/products/"+id,{
      method:"DELETE"
  }).then((res)=>{
      alert("REMOVED SUCCESSFUL PRODUCT");
  }).catch((err)=>{
      alert(err.message)
  });
}
  return (
    <div>
      
    </div>
  )
}

export default ProductDelete
