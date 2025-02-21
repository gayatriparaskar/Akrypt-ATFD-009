import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';



const Todo = ({text}) => {
   

        const [data,setData]=useState([])

    
 const [id,setId]=useState(1)
    
 
            //  form targe 
   const handleClick=(inputValue)=>{
   
    let obj={
        title:inputValue,
        status:false,
        id:id
    }
console.log(obj)
    let newArr=[...data,obj]
    setData(newArr)
    setId(id+1)

   }
   console.log(data)
// change status
const handleToggle=(id)=>{
    let newToggleArr=data.map((e)=>{
        if(e.id==id){
            return{
                ...e,
                status: !e.status
                // alert("toggle")
            }  
        }
        else{
            return{...e}
            }
    })
    setData(newToggleArr)
}
// const handleToggle=(id)=>{
//     console.log(id)
//     let newToggleArr=data.map((e)=>e.id==id?{...e, status:!e.status}:e)
//     setData(newToggleArr)
// }

// Delete data


const handleDelete=(id)=>{
    // console.log(id)
    const DeletedArr=data.filter((e)=>e.id!=id)
    setData(DeletedArr)
    }

    return (
        <div>
        <h1>Todo List</h1>
        
        <AddTodo   handleClick={handleClick}/>
         {/* Todo list */}
        
          {
            data.map((e)=>(
                <TodoItem {...e} Toggle={()=>{handleToggle(e.id)}}  Delete={()=>{handleDelete(e.id)}}/>
            ) 
            )}
            
     
        </div>

    );
}

export default Todo;
