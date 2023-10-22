import React,{useState} from 'react'
import data from "../components/data.js"
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart.svg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import close from '../images/icon-close.svg'




const Hero = ({sendcartValue}) => {
    const [products] = useState(data)
    const [value, setvalue] = useState(0)
    const {mainImage} = products[value]
    const [count, setcount] = useState(0)
    const [openCarousel,setOpenCarousel] = useState(false)
   
    const handleCartClick = () =>{
         sendcartValue(count)
    } 

    const nextSlide = () =>{
        if(value === products.length -1){
            setvalue(0)
        }
        else{
            setvalue(value+1)
        }
    }

    const previousSlide = () =>{
        if(value === 0){
            setvalue(products.length-1)
        }
        else{
            setvalue(value-1)
        }
    }


  return (
    <>
    <div className={openCarousel?'openCarousel':'closeCarousel'}>
        <button onClick={()=>setOpenCarousel(false)}><img src={close} alt='close'/></button>
        <img src={mainImage} alt='mainImage' />
        <div className='buttons'>
            <button onClick={()=>previousSlide()}> <img src={previous} alt='previous'/></button>
            <button onClick={()=>nextSlide()}><img src={next} alt='next'/></button>
        </div>
    </div>
    <div className='hero'>
    <div className='left'>
        <img onClick={()=>setOpenCarousel(true)} className='mainImage'
        src={mainImage} alt='mainImage'/>
      
        <ul  >
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
    
</>
  )
}

export default Hero