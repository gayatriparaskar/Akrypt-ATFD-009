import React, { useState } from 'react';
import AddTodo from './AddTodo';

const TodoList = () => {

    const [inputValue,setinputValue]=useState("")


    return (
        <div style={{border:"2px solid black",margin:"10px"}}>
            <h1>
                Todo List
            </h1>
       <AddTodo/>
        </div>
    );
}

export default TodoList;
