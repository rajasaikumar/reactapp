import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './employeeSlice';
import { increment,decrement } from './employeeSlice';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


const EmployeeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.employees.count)

  // const employees = useSelector((state) => state.employees?.employees || []);
  // const loading = useSelector((state) => state.employees?.loading);
  // const error = useSelector((state) => state.employees?.error);
//   const employeeState = useSelector((state) => state.employees || {});
// const { employees = [], loading, error, success } = employeeState;
 const {employees ,loading,error}=useSelector((state)=>state.employees || {});


  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (indexToDelete) => {
    employees((prevEmployees) =>
      prevEmployees.filter((_, index) => index !== indexToDelete)
    );
  };
  
  

  

  // console.log("Fetched employees:", employees); // Debugging log
  // console.log("Loading:", loading, "Error:", error); // Debugging log

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (employees.length === 0) return <p>No employees found.</p>

  return (
    <div className="container table-container">
    <h2 className="pf">Employee List</h2>
    <button className="btn btn-primary mb-3" onClick={() => navigate('/addemployeeform')}>Add Employee</button>

    {/* <h4>Employee Count: {count}</h4>
    <button onClick={() => dispatch(increment())}>++</button> */}
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
          {/* <th>Actions</th> */}
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
            {/* <td onClick={() => handleDelete(emp.id)} style={{ cursor: 'pointer', color: 'red' }}>
  <MdDelete />
</td> */}

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default EmployeeList;
