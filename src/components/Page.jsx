import React, { useState } from 'react'
import Cart from './Cart'
import Products from './Products'

function Page() {
    const [total, setTotal] = useState(0)
    const data = [

        {id: 1, name: "Product-1", price:100},
        
        {id: 2, name: "Product-2", price:200},
        
        {id: 3, name: "Product-3", price:300},
        
        ]


let tt = data.reduce((acc,item) =>2 + Number(item.price))
console.log("data count",tt)


  return (
    <div id="outBox">
    <div id="box">
         {data.map((item)=>(
            <div key={item.id}>
         <Products {...item}/>



         {/* <>
<div id="inBox">
    <h1>{item.name}</h1>
    <h2>{item.price}</h2>
    <button onClick={()=>setTotal(total+1)}>+</button>
    <button onClick={()=>setTotal(total-1)}>-</button>
   </div>
</> */}





         </div>




         ))}




    {/* {data.reduce((acc,item)=>(
           
        // <Cart gtotal2={acc+Number(item.price)} />
        <h2>Grand Total:{acc+Number(item.price)}</h2>
        
         ))} */}


       
    </div>
    {/* <Cart/> */}
    </div>
  )
}

export default Page