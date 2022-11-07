import React, { useEffect, useState } from 'react'
import "./all.css"
import Cart from './Cart'
function Products({data}) {

    const [total, setTotal] = useState()
    const[addedArr,setAddedArr]=useState([])
    
    const [gt, setGt] = useState(0)

const handleAdd=(el)=>{
    el.quant++
    setTotal(total)
    setGt(gt+el.price)
    setAddedArr([...addedArr,el])


}



// let grndTotal=arrr.reduce((a,b)=>{
//     return a+b},0)

    const handleminus=(el)=>{
        el.quant--
        setTotal(total-1)
        setGt(gt-el.price)
        addedArr.pop()
    }
  return (
    <>
    {data?.map((el,index)=>{
        return(
            <div key={index} id="inBox">
    <h1>{el.name}</h1>
    <h2>{el.price}</h2>
    <button onClick={()=>handleAdd(el)}>+</button>
    <button onClick={()=>handleminus(el)}>-</button>
   </div>
        )
    })}
    

  

    <Cart gt={gt} addedArr={addedArr} total={total}  />

</>
  )
}

export default Products