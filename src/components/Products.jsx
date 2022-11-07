import React, { useState } from 'react'
import "./all.css"
import Cart from './Cart'
function Products({name,price}) {

    const [total, setTotal] = useState(0)

    
    


  return (
    <>
    <div id="inBox">
    <h1>{name}</h1>
    <h2>{price}</h2>
    <button onClick={()=>setTotal(total+1)}>+</button>
    <button onClick={()=>setTotal(total-1)}>-</button>
   </div>

   <Cart total={total} price={price} name={name}/>

   

</>
  )
}

export default Products