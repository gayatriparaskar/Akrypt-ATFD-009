import React from 'react';

const ClickMe = (props)=>{
   
    return(
       alert("Thanks for clicking me")
    )
}
const Button = ({handleCLick,bgColor,Color,buttonText}) => {
    // console.log(props.Color)
    return (
        <div>
            {/* <button id="btn1" onClick={props.handleCLick} style={{backgroundColor:`${props.bgColor}`,color:`${props.Color}`}}>{props.buttonText}</button> */}
            <button id="btn1" onClick={handleCLick} style={{backgroundColor:`${bgColor}`,color:`${Color}`}}>{buttonText}</button>
        </div>
    );
}

export default Button;

