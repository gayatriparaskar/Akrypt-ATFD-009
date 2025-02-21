import React from 'react';

const Title = ({ title,Color,fontFamily}) => {
    return (
        <div>
            <h1 style={{color:"teal",fontFamily:"sans-serif"}}>{ title}</h1>
        </div>
    );
}

export default Title;
