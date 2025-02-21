import React from 'react';
import { useState } from 'react';

const TodoItem = ({TodoData}) => {
 
    
    console.log(TodoData)
    
    return (
        <div >
        <p>
           {TodoData.id+"."}  {TodoData.course} - {TodoData.status?"completed":"Not completed"}
         </p>
         {/* <button class="countBtn" onClick={()=>handleToggle(TodoData.id)}>Toggle</button>
         <button class="countBtn" onClick={()=>handleDelete(TodoData.id)}>Delete</button> */}
         </div>
    );
}

export default TodoItem;
