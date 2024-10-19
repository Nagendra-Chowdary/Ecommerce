import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
return(
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt=''></img>
        <p>SHOPPER</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr />:<React.Fragment></React.Fragment>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr />:<React.Fragment></React.Fragment>}</li>
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
