import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { multiply } from './employees/employeeSlice';

export const Demo = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.employees.count)
  return (
    <div>
        <p>hello {count}</p>
        <button onClick={()=>dispatch(multiply())}>increase</button>
    </div>
  )
}
