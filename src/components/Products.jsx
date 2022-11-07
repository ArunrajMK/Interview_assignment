import React, {  useState } from 'react'
import "./all.css"
import Cart from './Cart'
function Products({ data }) {

  
    const [addedArr, setAddedArr] = useState([])
   



    const handleAdd = (el) => {

        let newArr = [...addedArr]
      
       

        let arr1 = add(newArr, el)
        setAddedArr(arr1)
    }

    const add = (newArr, el) => {
        let f = true
        console.log(newArr);

        newArr?.forEach((e) => {
            if (e.id === el.id) {
                e.Q += 1
                f = false

            }
        })
        if (f) {
            newArr.push({ ...el, Q: 1 })
        }

        return newArr
    }

    

    const handleminus = (el) => {
      
        let newArr = [...addedArr]
       

        let arr1 = minus(newArr, el)
        setAddedArr(arr1)
    }


    const minus = (newArr, el) => {
        let f = true
        console.log(newArr);

        newArr?.forEach((e) => {
            if (e.id === el.id) {
                e.Q -= 1
                f = false
                if (e.Q < 0) {
                    e.Q = 0
                }
            }
        })


        return newArr
    }





    return (
        <>
            {data?.map((el, index) => {
                return (
                    <div key={index} id="inBox">
                        <h1>{el.name}</h1>
                        <h2>{el.price}</h2>
                        <button onClick={() => handleAdd(el)}>+</button>
                        <button onClick={() => handleminus(el)}>-</button>
                    </div>
                )
            })}




            <Cart  addedArr={addedArr}  />

        </>
    )
}

export default Products