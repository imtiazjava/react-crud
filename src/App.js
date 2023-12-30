import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductEdit from './components/ProductEdit';
import ProductDelete from './components/ProductDelete';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
      <div className="App">
          <h1 className="text-xl-center bg-dark text-white mt-3 p-3">REACTJS CRUD OPERATION</h1>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ProductList/>}></Route>
              <Route path='/products/create' element={<ProductForm/>}></Route>
              <Route path='/products/details/:id' element={<ProductDetails/>}></Route>
              <Route path='/products/update/:id' element={<ProductEdit/>}></Route>
              <Route path='/products/delete/:id' element={<ProductDelete/>}></Route>
              
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
