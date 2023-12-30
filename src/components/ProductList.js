import React,{useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

const ProductList = () => {
 const[productData,setData]=useState(null);
 const navigate=useNavigate();
 useEffect(()=>{
      fetch("http://localhost:2222/products").then((res)=>{
            return res.json();
      }).then((resp)=>{
            setData(resp)
      }).catch((err)=>{
          alert(err.message);
      });
 },[])

 const DetailsFunction=(id)=>{
        navigate("/products/details/"+id);
 }

 const EditFunction=(id)=>{
    navigate("/products/update/"+id);

 }
 const DeleteFunction=(id)=>{
    //navigate("/products/delete/"+id);
    if(window.confirm('Are you sure you want to delete')){
        fetch("http://localhost:2222/products/"+id,{
        method:"DELETE"
    }).then((res)=>{
        alert("REMOVED SUCCESSFUL PRODUCT");
        window.location.reload();
    }).catch((err)=>{
        alert(err.message)
    });
 }
}
 
 
  return (
    <div className="container">
        <div className="card bg-dark border-1">
              <div className="card-title">
                <h2 className="text-decoration-underline">PRODUCT LISTS</h2>

              </div>
              <div className="card-body bg-warning text-white">
                    <div className="mt-2">
                        <Link className="btn btn-success float-md-start mb-2" to="products/create">ADD NEW(+)</Link>
                    </div>
                    <table className="table table-bordered bg-primary mt-4">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>PRODUCT ID</th>
                                <th>PRODUCT NAME</th>
                                <th>PRODUCT PRICE</th>
                                <th>ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                             { productData &&
                                productData.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.pname}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <a onClick={()=>{EditFunction(item.id)}} className="btn btn-info" >EDIT</a>&nbsp;
                                            <a onClick={()=>{DeleteFunction(item.id)}} className="btn btn-danger" >DELETE</a>&nbsp;&nbsp;
                                            <a onClick={()=>{DetailsFunction(item.id)}} className="btn btn-success">DETAILS</a>&nbsp;&nbsp;
                                            

                                        </td>
                                    </tr>
                                ))
                             }
                            
                        </tbody>
                    </table>
              </div>

        </div>
       
    </div>
  )
}

export default ProductList
