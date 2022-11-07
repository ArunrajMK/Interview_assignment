import React, { useEffect, useState } from 'react'
import "./all.css"
function Cart({gt,addedArr,total}) {

console.log("fff",addedArr);
  
 let out=addedArr?.reduce((a,b)=>{
  
  return Number(a)+Number(b.price*b.Q)
 },0)
 console.log("a",out);

  return (
    <div id="cart">
      
        {/* <div id="container">
       
        <div>Product Name: {name}</div> */}
        <div> <h4>Cart</h4></div>
         {addedArr.map((item)=>(
          <>
          <h4>Name:{item.name}  Quantity: {item.Q}</h4>
          
          </>
         ))}
        <h3>Total:{out}</h3>
       
    </div>
  )
}

export default Cart