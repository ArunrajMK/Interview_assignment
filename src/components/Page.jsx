import React, { useEffect, useState } from 'react'
import Products from './Products'

function Page() {



    
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState([])
    const data = [

        {id: 1, name: "Product-1", price:100},
        
        {id: 2, name: "Product-2", price:200},
        
        {id: 3, name: "Product-3", price:300},
        
        ]




// let tt = data.reduce((acc,item) =>2 + Number(item.price))
// console.log("data count",tt)


  return (
   
    <div id="box">
         
               
         <Products data={data}/>

       
    </div>
   
 
  )
}

export default Page