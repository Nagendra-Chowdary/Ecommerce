import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
return(
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt=''></img>
        <p>SHOPPER</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to='/' >Shop</Link>{menu==="shop"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/mens' style={{textDecoration:'none',color:'black'}} >Men</Link>{menu==="men"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration:'none',color:'black'}}>Women</Link>{menu==="women"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none',color:'black'}}>Kids</Link>{menu==="kids"?<hr />:<React.Fragment></React.Fragment>}</li>
    </ul>
    <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt='' />
         <div className="nav-cart-count">0</div>
    </div>
    </div>
);
}

export default Navbar;
