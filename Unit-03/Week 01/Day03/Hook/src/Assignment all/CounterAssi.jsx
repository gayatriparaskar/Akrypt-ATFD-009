import React, { useState } from 'react';

const CounterAssi = () => {

    const[count,setCount]=useState(0)
// const handleInc=()=>{
//     // setCount(count+1)
//     if(count<=0){
//         setCount(0)
//     }
//     else{
//         setCount(count+1)
//     }
// }

    return (
        <div>
            <h1>Count:{count}</h1>
             <button class="countBtn" onClick={()=>{(count+1)>=10?setCount(0):setCount(count+1)}}>INC</button>
             <button class="countBtn" onClick={()=>{(count-1)<0?setCount(0):setCount(count-1)}} >DEC</button>
             <button class="countBtn" onClick={()=>{setCount(0)}}>RESET</button>
        </div>
    );
}

export default CounterAssi;
