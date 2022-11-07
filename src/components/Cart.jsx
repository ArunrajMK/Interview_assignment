import React, { useEffect, useState } from 'react'
import "./all.css"
function Cart({total,price,name,gtotal2}) {

  let gtotal = 0 
  gtotal += total*Number(price)

  
//  let arr = [];
//  arr.push(gtotal)


// const [arrr, setarrr] = useState([])
// useEffect(()=>{
//   setarrr([...arrr,gtotal])
// },[])


  return (
    <div>
      
        <div id="container">
        <h4>Cart</h4>
        <div>Product Name: {name}</div>
        <div>Product Count:{total}</div>
         <div>Total:{gtotal}</div>
       
        </div>
    </div>
  )
}

export default Cart