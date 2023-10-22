import React,{useState,useEffect} from 'react'
import deleteIcon from '../images/icon-delete.svg'
import itemthumbnail from '../images/image-product-1-thumbnail.jpg'
import './cartDetailesStyles.css'
const CartDetails = (props) => {
    const [cartValue, setcartValue] = useState(0)
    useEffect(() => {
        setcartValue(props.cartValue); 
      }, [props.cartValue]);
    
  return (
    <div className={props.cartShow?'cartShow':"cartHide"}>
        <p>Cart</p>
        {cartValue > 0? (
            <div>
            <div className='details'>
            <img src={itemthumbnail} alt='thumbnail'/>
            <p>Fall limited edition sneakers</p>
            <p>$125 x {cartValue} <span>${125*cartValue}</span></p>
            <img onClick={()=>setcartValue(0)} src={deleteIcon} alt='deleteIcon'/>
        </div>
        <button>Checkout</button>
        </div>
        ):(
            <p className='emptyText'>Your cart is empty</p>
        )
        }
        
    </div>
  )
}

export default CartDetails