import React from 'react'
import { useState } from 'react';
import { Componentb } from './componentb';

export const Componenta = () => {
 const  [user,setuser] =useState("hii coder")
  return (
    <div>
       
        <Componentb users={user}/>
        </div>
  )
}
