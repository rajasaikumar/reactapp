import React, { useEffect, useRef, useState ,useeffect} from 'react';
import { increment, decrement, incrementByAmount,multiplyByAmount } from "./counterslice"
import { useSelector, useDispatch } from 'react-redux';


 const Component2 = () => {
   
    const [inputvalue,setinputvalue] =useState('')
    const count = useRef(0)
    const dispatch = useDispatch();
    useEffect(()=>{
        count.current = count.current+1
    })
    
  return (
    <div>Component2

        {/* <input type='text' value={inputvalue}
        onChange={(e)=>setinputvalue(e.target.value)}>
        
        </input>
        <p>current: {count.current}</p> */}
        <p>dhgjgfh</p>
        <button onClick={() => dispatch(decrement())}>-__</button>
              <button onClick={() => dispatch(increment())}>+++</button>
        
    </div>
  )
}
export default Component2
