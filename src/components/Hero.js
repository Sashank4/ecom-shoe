import React,{useState} from 'react'
import data from "../components/data.js"
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart.svg'

const Hero = () => {
    const [products] = useState(data)
    const [value, setvalue] = useState(0)
    const {mainImage} = products[value]
    const [count, setcount] = useState(0)
    const [cartValue, setcartValue] = useState(0)

    const handleCartClick = () =>{
         setcartValue(125*count) 
           
    } 

  return (
    <div className='hero'>
    <div className='left'>
        <img className='mainImage'
        src={mainImage} alt='mainImage'/>
      
        <ul >
            {products.map((item,index) => (
                <li 
                    key={item.id}
                    onClick={() =>setvalue(index)}
                >
                    <img className={index===value? 'thumbActive':''}
                     src={item.thumbnail} alt='thumbnail'/>
                </li>
            ))

            }
        </ul>
    </div>

    <div className='right'>
        <p className='sellerName'>SNEAKER COMPANY</p>
        <h1 className='productName'>Fall Limited Edition Sneakers</h1>
        <p className='productDescription'>These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='affectivePrice'>
            <h1>$125</h1>
            <p>50%</p>
        </div>
        <p className='originalPrice'>$250</p>
        <div className='counter'>
            <div className='counterItem'>
                <img src={minus} alt='minus' onClick={()=>setcount(count-1)}/>
                <p>{count}</p>
                <img src={plus} alt='plus' onClick={()=>setcount(count+1)}/>
            </div>
            <button onClick={()=>handleCartClick()}><img src={cart} alt='cart'/><span>Add to cart</span></button>
        </div>
        
    </div>
    </div>
  )
}

export default Hero