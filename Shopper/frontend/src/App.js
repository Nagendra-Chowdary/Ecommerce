import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop'
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
function App (){
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory category="mens" />}></Route>
          <Route path='/womens' element={<ShopCategory category="womens" />}></Route>
          <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product' element={<Product/>}>
          <Route path='/product/:productId' element={<Product/>}></Route>
          </Route>
          <Route path='/LoginSigup' element={<LoginSignup/>}></Route>
        </Routes>
        </BrowserRouter>
       
      </div>
    );
  }


export default App;
