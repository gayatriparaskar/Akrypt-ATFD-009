import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { useState } from 'react';
import Todo from './component/Todo';
import FrictionalBook from './component/FrictionalBook';
import FrictionData from"./component/FrictionData.json"
import NonfrictionalBook from './component/NonfrictionData.jsx';
import CounterAssi from './Assignment all/CounterAssi.jsx';
import TodoList from './Assignment all/todoList/TodoList.jsx';
import Users from './Assignment all/Users/Users.jsx';
import ButtonSort from './Assignment all/Users/ButtonSort.jsx';
import UsersData from"./Assignment all/UsersData.json"

function App() {

//   const [status,Setstatus]=useState(false)
//   function handleCLick(){
//     // alert("switch to Frictional Book")
//     Setstatus(!status)
//     }
// console.log(Setstatus)

// function handleBokk(){
//   Setstatus(true)
// }
// const [state,setState]=useState(false)

// const handleToggle=()=>{
// setState(!state)
// }


  return (
    <div className="App">
   {/* <Counter handleToggle={handleToggle} status={state}/> 
   <h1>Mini Book Store</h1>
               <button id="toggleBtn" onClick={handleCLick}>{status?"Show Non-Friction Data Books":"Show Friction Data Books"}</button>
               <h1>{status?"Friction Books":"Non-Friction Books"}</h1> 
  {/* <FrictionalBook/>
  <NonfrictionalBook/>*/}
  {/* {status?<FrictionalBook/>: <NonfrictionalBook/>} 
  <Todo/> */} 
  
        <Todo/>


  {/* Assignment Section */}
{/* <CounterAssi/>
<TodoList/>
<div>
           <h1>Users List</h1>
            <h3>Sort by their number of followers</h3>
            <button class="countBtn">Sort by asc</button>
            <button class="countBtn">Sort by desc</button>
            <button class="countBtn">Sort by Reset</button> */}
            
             {/* <ButtonSort /> */}
            {/* {
              UsersData.map((e)=>{
               return  <ButtonSort sortt={e.followers}/>
              })
            } */}
           
{/* </div>     
<Users/> */}
    </div>
    //Assignment end
  );
}

export default App;
