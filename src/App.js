import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CreateType from "./type/Create";
import CreateProduct from  "./product/Create";
import ProductList from "./product/ProductList";
import TypeList from "./type/List";

function App() {
  return (
    <BrowserRouter>
        <Link style={{padding:"20px"}} to={"/type/create"}>add type</Link>
        <Link style={{padding:"20px"}} to={"/product/create"}>add product</Link>
        <Link style={{padding:"20px"}} to={"/product/list"}>List product</Link>
        <Link style={{padding:"20px"}} to={"/type/list"}>All types</Link>
      <Routes>
          <Route path={"/type/create"} element={<CreateType/>}/>
          <Route path={"/type/list"} element={<TypeList/>}/>
          <Route path={"/product/create/:id"} element={<CreateProduct/>}/>
          <Route path={"/product/list"} element={<ProductList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
