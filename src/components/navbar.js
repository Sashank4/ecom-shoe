import React, { useState } from 'react'
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  return (
    <header>
        <button className='menuIcon' onClick={()=> setclicked(!clicked)} >{clicked?<img src={close} alt='close'/>:<img src={menu} alt='menu'/>}</button>
        <img src={logo} alt='logo'/>
        <ul className={clicked ? "active" :'inactive'} >
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button><img src={cart} alt='cart'/></button>
        <button><img src={avatar} alt='avatar'/></button>
      </header>
  )
}

export default Navbar