import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CreateType from "./type/Create";
import CreateProduct from  "./product/Create";
import ProductList from "./product/ProductList";
import TypeList from "./type/List";
import ProductListByType from "./product/ProductListByType";

function App() {
  return (
    <BrowserRouter>
        <div className="navbar">
            <Link className="navbar-link" to="/type/create">Add Type</Link>
            <Link className="navbar-link" to="/type/list">Add Product</Link>
            <Link className="navbar-link" to="/product/listProductBytype">List Product by Type</Link>
            <Link className="navbar-link" to="/type/list">All Types</Link>
        </div>
      <Routes>
          <Route path={"/type/create"} element={<CreateType/>}/>
          <Route path={"/type/list"} element={<TypeList/>}/>
          <Route path={"/product/create/:id"} element={<CreateProduct/>}/>
          <Route index path={"/"} element={<ProductList/>}/>
          <Route path={"/product/listProductBytype"} element={<ProductListByType/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
