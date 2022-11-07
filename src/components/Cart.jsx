import React, { useEffect, useState } from 'react'
import "./all.css"
function Cart({gt,addedArr,total}) {

console.log(addedArr);
  
 


  return (
    <div id="cart">
      
        {/* <div id="container">
       
        <div>Product Name: {name}</div> */}
        <div> <h4>Cart</h4></div>
         {/* <div>Total:{gtotal}</div>
       
        </div> */}
        <h3>Price: {gt}</h3>
    </div>
  )
}

export default Cart