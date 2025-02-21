import React, { useState } from 'react';

const Counter = ({handleToggle,status}) => {
    
    const [count,setCount]=useState(0)
    console.log(count)
 
//     const handleClick=()=>{
//    setCount(count+1)
       
//     }

    // const handleDrec=()=>{
    //     setCount(count-1)
            
    //      }

         const handleMul=()=>{
            setCount(count*2)
                
             }



    return (
        <div>
            <h1>Counter system</h1>
              <h3>{count}</h3>
              <br></br>
              <button onClick={()=>{setCount(count+1)}}>Incre.</button>
              <br></br>
              <br></br>
              <button onClick={()=>{setCount(count-1)}}>Decre.</button>
              <br></br>
              <br></br>
              <button onClick={handleMul}>Mul.</button>
              <br></br>
              <br></br>
              <h3>{status?"Unfollow":"follow"}</h3>
              <button onClick={handleToggle}>status</button>
                 </div>
    );
}

export default Counter;
