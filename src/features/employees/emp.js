import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchEmployees } from './employeeSlice';



export const Emp = () => {
    const dispatch = useDispatch();
    const {employees = []}=useSelector((state)=>state.employees || {});

    useEffect(()=>{
        dispatch(fetchEmployees());
    },dispatch)

  return (
   <div>
      <h2 className='pf'>Employee List</h2>
      <table  border="2" cellPadding="11" cellSpacing="2">
      <thead >
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th> Gender</th>
       
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index)=>
        <tr key={index}>
          <td>{emp.first_name}</td>
          <td>{emp.last_name}</td>
          <td>{emp.gender}</td>
          
        </tr>
        )}
      </tbody>
      </table>
    </div>
  )
}
