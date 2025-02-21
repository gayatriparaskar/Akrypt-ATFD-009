import React, { useEffect, useState } from 'react';


const Products = () => {
    const[producData,setproductDat]=useState([])
    const fetchData=()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=50`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setproductDat(data)
        })
    }
    useEffect(()=>{
        fetchData()
    })
    console.log(producData)
    return (
        <div>
            <h1> All Product</h1>
            <div className=' grid grid-cols-5 border-2 border-solid'>
            {
                producData.map((e)=>(
                    <div className='border-1 border-solid m-1 p-2'>
                        
                        <h3>{e.id}</h3>
                        <h1>{e.email}</h1>
                        <h2>{e.name}</h2>
                        </div>
                ))
            }
            </div>
           
        </div>
    );
}

export default Products;
