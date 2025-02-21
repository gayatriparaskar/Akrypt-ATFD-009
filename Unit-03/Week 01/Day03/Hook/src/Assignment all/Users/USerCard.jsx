import React from 'react';
import ButtonSort from './ButtonSort';

const USerCard = ({card}) => {
    console.log(card)
   //  let maried=card.isMarried
   //  if(maried){
   //    maried="yes"
   //  }
   //  else{
   //    maried="No"
   //  }
    return (
      <div>
        

      <div  style={{border:"2px solid black",margin:"10px"}}>
         <div style={{ border:"2px solid black",width:"700px",margin:"20px 100px 100px 250px",display:"flex"}}>
         <h1>{card.id}</h1>
            <div>
               
            <img style={{borderRadius:"50%",padding:"10px",margin:"10px"}} src={card.avatar}/>

            </div>
          <div style={{display:"block"}}>
               <div style={{display:"block"}}>
               <h2>{card.name}</h2>
               <p>{card. address}</p>
               </div>
               <div style={{display:"block",gap:"10px"}}>
                  <div style={{display:"flex",gap:"20px"}}>
                  <h3>posts</h3>
                  <h3>followers</h3>
                  <h3>Married</h3>
                  </div>
                  <div style={{display:"flex",gap:"50px"}}>
                  <p>{card.posts}</p>
                  <p>{card.followers}</p>
                  <p style={{color:"lime"}}>{card.isMarried?"yes":"No"}</p>
                  </div>
               </div>
           </div>
           <button class="countBtn" style={{height:"30px",margin:"100px "}} onClick={()=>{alert(`Your are now Folowing ${card.name}`)}}>Follow</button>
            </div>
      </div>
      
      </div>
    )
}

export default USerCard;
