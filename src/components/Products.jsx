import React, { useEffect, useState } from 'react'
import "./all.css"
import Cart from './Cart'
function Products({data}) {

    const [total, setTotal] = useState()
    const[addedArr,setAddedArr]=useState([])
    const[quantity,setQuantity]=useState(1)
    const [gt, setGt] = useState(0)

    
const handleAdd=(el)=>{
    
   let newArr=[...addedArr]
    setTotal(total)
    setGt(gt+el.price)

    let arr1=add(newArr,el)
    setAddedArr(arr1)
}

const add=(newArr,el)=>{
    let f=true
    console.log(newArr);
    
    newArr?.forEach((e)=>{
        if(e.id==el.id){
         e.Q+=1
         f=false
         
        }
     })
     if(f){
        newArr.push({...el,Q:1})
     }
    
     return newArr
}

// let grndTotal=arrr.reduce((a,b)=>{
//     return a+b},0)

    const handleminus=(el)=>{
        // if(el.count===1){
        //     addedArr.pop()
        // }
        // el.quant--
        // setTotal(total-1)
        // setGt(gt-el.price)
        // addedArr.pop()
        // setAddedArr([...addedArr,el])
    let newArr=[...addedArr]
    // setTotal(total)
    // setGt(gt+el.price)

    let arr1=minus(newArr,el)
    setAddedArr(arr1)
    }


    const minus=(newArr,el)=>{
        let f=true
        console.log(newArr);
        
        newArr?.forEach((e)=>{
            if(e.id===el.id){
             e.Q-=1
             f=false
             
            }
         })
         if(f){
            newArr.push({...el,Q:1})
         }
        
         return newArr
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