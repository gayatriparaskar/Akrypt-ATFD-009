import React from 'react';
import USerCard from './USerCard';
import UsersData from "../UsersData.json"
import ButtonSort from './ButtonSort';

const Users = () => {
    return (
        <div>
           
           <div>
  {
        UsersData.map((e)=>{
          return <USerCard  card={e} />
        })
  }
</div>
         
        </div>
    );
}

export default Users;
