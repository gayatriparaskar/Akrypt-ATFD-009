import React from 'react';
import NonfrictionData from"./NonfrictionData.json"
import BookCard from './BookCard';

const NonfrictionalBook = () => {
    return (
        <div id="con">
            
            
            {
                NonfrictionData.map((e)=>{
                    // console.log(e)
                  return <BookCard book={e}/>
                  })
            }
        </div>
    );
}

export default NonfrictionalBook;


// <div >
// <div id='card'>
//     <img style={{width:"200px",height:"200px"}} src={e.img}/>
//     <p>{e.title}</p>
//     <p>({e.year})</p>
//     <p>{e.author}</p>
//     <p>Price: $ {e.price}</p>
// </div>
// </div>
// author
// : 
// "JK Rowling"
// img
// : 
// "https://n2.sdlcdn.com/imgs/a/4/6/Harry-Potter-And-The-Philosophers-SDL237954387-1-5e0d6.jpg"
// price
// : 
// 499
// title
// : 
// "Harry Potter and the Philosopher's Stone"
// year
// : 
// "1997"