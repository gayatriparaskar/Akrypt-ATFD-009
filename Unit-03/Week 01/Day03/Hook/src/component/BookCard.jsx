import React from 'react';

const BookCard = ({book}) => {
    // console.log(author)
    return (
        <div id="con">
             <div id='card'>
                            <img style={{width:"200px",height:"200px"}} src={book.img} alt={book.title}/>
                            <p>{book.title}</p>
                            <p>({book.year})</p>
                            <p>{book.author}</p>
                            <p>Price: $ {book.price}</p>
             </div>
        </div>
    );
}

export default BookCard;
