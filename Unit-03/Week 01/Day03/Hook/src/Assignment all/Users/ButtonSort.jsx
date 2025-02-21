import React, { useState } from 'react';

const ButtonSort = ({sortt}) => {
    // console.log(sort)
    const [sortData,setsortData]=useState([])
    

const handleInc=()=>{
   sortt.sort((a,b)=>{

        return (a.followers-b.followers)
    
           })
   console.log(sortt)
}
    return (  
       

        <div>
             <button class="countBtn" onClick={handleInc}>Sort by asc</button>
            <button class="countBtn">Sort by desc</button>
            <button class="countBtn">Sort by Reset</button>
            
        </div>
    );
}

export default ButtonSort;
