import React, { useState } from 'react'
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import CartDetails from './cartDetails.js'
const Navbar = (props) => {
  const [clicked, setclicked] = useState(false);
  const [cartclicked, setcartclicked] = useState(false)
  return (
    <header className='p-10'>
        <button className='menuIcon ' onClick={()=> setclicked(!clicked)} >{clicked?<img src={close} alt='close'/>:<img src={menu} alt='menu'/>}</button>
        <img className='logo' src={logo} alt='logo'/>
        <ul className={clicked ? "active" :'inactive'}>
          <li>Collections </li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={()=>setcartclicked(!cartclicked)}><img src={cart} alt='cart'/><p></p></button>
        <img className='avatar' src={avatar} alt='avatar'/>
        <CartDetails cartValue={props.cartValue} cartShow={cartclicked}/>
      </header>
  )
}

export default Navbar