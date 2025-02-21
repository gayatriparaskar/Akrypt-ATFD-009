import React, { useState } from 'react';
import TodoItem from './TodoItem';

const AddTodo = () => {
    const [inputData,setinputData]=useState("")
     
    const [data,setData]=useState([])
const[id,setId]=useState(1)

const handlAddData=()=>{
    let obj={
        course:inputData,
        status:false,
        id:id
    }
console.log(obj)
let newArr=[...data,obj]
setData(newArr)
setId(id+1)
setinputData("")


}
console.log(data)
   


const handleToggle = (id)=>{
    let newToggle=data.map((e)=>e.id==id?{...e,status:!e.status}:e)
    setData(newToggle)
    
    }
const handleDelete=(id)=>{
    let deleteArr=data.filter((e)=>e.id!=id)
    setData(deleteArr)
  
}
    
    return (
        <div>
            <div>
            <input type='text' placeholder='Add a new Todo' value={inputData} onChange={(e)=>{setinputData(e.target.value)}}/>
              <button class="countBtn" onClick={handlAddData}>Add</button>
            </div>
            
            <div>
          {/* {
            data.map((e)=>(
                // console.log(e)
                <div style={{border:"2px solid black"}}>
                   <h1>
                      {e.id+"."}  {e.course} - {e.status?"completed":"Not completed"}
                    </h1>
                    <button class="countBtn" onClick={()=>handleToggle(e.id)}>Toggle</button>
                    <button class="countBtn" onClick={()=>handleDelete(e.id)}>Delete</button>
                    </div>
            ))
          } */}
          {
            data.map((e)=>(
                <div style={{border:"1px solid black",margin:"10px"}}>
                     <TodoItem  TodoData={e}/>
                    <div>
                    <button class="countBtn" onClick={()=>handleToggle(e.id)}>Toggle</button>
                    <button class="countBtn" onClick={()=>handleDelete(e.id)}>Delete</button>
                    </div>
                </div>
            ))
          }
             
            </div>
        </div>
       
    );
}

export default AddTodo;
