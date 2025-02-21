import React, { useState } from 'react';

const AddTodo = ({handleClick}) => {
     const [inputValue,setinputValue]=useState("")
     
//  const handleTodoAdd=()=>{
//     handleClick(inputValue)
//  }
    return (
        <div>
             <div>
            <input type="text" value={inputValue} onChange={(e)=>{setinputValue(e.target.value)}}/>
            <br></br>
            <button onClick={()=>{handleClick(inputValue)}}>Add Todo</button>
            <br>
            </br>
        </div>
        </div>
    );
}

export default AddTodo;
