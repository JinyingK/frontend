import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} style={{height:90, width:90}} />
            <p>Farmer MarketPlace</p>
            </div>
            <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none' }}to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("meats")}}><Link style={{textDecoration: 'none' }}to='/meats'>Meats</Link>{menu==="meats"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("vegetables")}}><Link style={{textDecoration: 'none' }}to='/vege'>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("dairy")}}><Link style={{textDecoration: 'none' }}to='/dairy'>Dairy</Link>{menu==="dairy"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("help")}}><Link style={{textDecoration: 'none' }}to='/help'>Help</Link>{menu==="help"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none' }}to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/loginsignup'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} style={{height:50, width:50}} /></Link>
               
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
