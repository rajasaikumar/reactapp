// import React from 'react';
// import { useRef } from 'react';


//  const Component1 = () => {
//     const inputref = useRef(null)

//     const focus =()=>{
// inputref.current.focus();
//     }

//   return (
//     <div>component1
//     <input type='text' ref={inputref}></input>
//     <button onClick={focus}>click</button>
   
//     </div>
   
//   )
// }
// export default Component1;



import React, { useRef, useState } from 'react'

const Component1 = () => {
    const [name,setname] = useState("");
    const inputref=useRef(null);

    const focus =()=>{
     inputref.current.focus();
    }

  return (
    <div>Component1
        <input
        type='text' ref={inputref}
      />
      <button oncClick={focus}>smash</button>
    </div>
  )
}
export default Component1
