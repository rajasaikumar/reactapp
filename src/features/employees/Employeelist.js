import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './employeeSlice';

import { useNavigate } from 'react-router-dom';



const EmployeeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.employees.count)

  
 const {employees ,loading,error}=useSelector((state)=>state.employees || {});


  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (employees.length === 0) return <p>No employees found.</p>

  return (
    <div className="container table-container">
    <h2 className="pf">Employee List</h2>
    <button className="btn btn-primary mb-3" onClick={() => navigate('/addemployeeform')}>Add Employee</button>

   
    <table className="table table-bordered table-hover">
    
      <thead className='ff'> 
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Employee ID</th>
          <th>Joining Date</th>
        
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.first_name}</td>
            <td>{emp.last_name}</td>
            <td>{emp.gender}</td>
            <td>{emp.dob}</td>
            <td>{emp.mobileno}</td>
            <td>{emp.email}</td>
            <td>{emp.address}</td>
            <td>{emp.employee_id}</td>
            <td>{emp.joiningdate}</td>
           

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default EmployeeList;
