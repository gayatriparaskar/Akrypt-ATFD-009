import React from 'react';

const TodoItem = ({id,title,status,Toggle,Delete}) => {
    console.log(id,title,status)
    return (
        <div>
            <div>
             <h1>{id}.{title}-{(status)?"Completed":"Not Completed"} </h1>
             <button onClick={Toggle}>Toggle</button>
             <button onClick={Delete}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
