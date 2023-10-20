import React from 'react'
import deleteIcon from '../images/icon-delete.svg'
import itemthumbnail from '../images/image-product-1-thumbnail.jpg'
import './cartDetailesStyles.css'
const cartDetails = (props) => {
  return (
    <div className={props.cartShow?'cartShow':"cartHide"}>
        <p>Cart</p>
        <p>Your cart is empty</p>
        <div className='details'>
            <img src={itemthumbnail} alt='thumbnail'/>
            <p>Fall limited edition sneakers</p>
            <p>$125 x 3 <span>{125*3}</span></p>
            <img src={deleteIcon} alt='deleteIcon'/>
        </div>
        <button>Checkout</button>
    </div>
  )
}

export default cartDetails