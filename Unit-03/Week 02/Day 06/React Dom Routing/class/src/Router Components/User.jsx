import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {

const [data,setData]=useState([])
    const fetchData=()=>{
                fetch(`https://reqres.in/api/users`)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data.data)
                    setData(data.data)
                })
    }
    useEffect(()=>{
        fetchData()
    },[])
     console.log(data)
    return (
        <div>
            <h1 className='font-bold'>Users</h1>
       {
        data.map((e)=>(
           <div  key={e.id} className=' border-2 border-solid m-4'>
            <h4>{e.id}</h4>
            <h1>{e.first_name}</h1>
            <img src={e.avatar} alt="" className='m-auto'/>
            <h3>{e.email}</h3>
            <Link to={`/User/${e.id}`}>More information</Link>
            </div> 
        ))
       }
          
        </div>
    );
}

export default User;
