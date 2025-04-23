import React from 'react';
// import Component1 from './components/component1';
// import Component2 from './components/component2';
import './App.css';
// import Counter from './components/counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './features/employees/Employeelist'
import AddEmployeeForm from './features/employees/Addemployeeform';
import 'bootstrap/dist/css/bootstrap.css';
import { Componenta } from './components/context/componenta';
// import { Emp } from './features/employees/emp';


function App() {
  return (
   <div>
{/* <Component1/>
 <Component2/> */}
 {/* <Counter/> */}
 {/* <h1>Employee Manager </h1>
      <AddEmployeeForm />
      <hr />
      <EmployeeList />
     
      <hr/> */}
      {/* <Emp/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/addemployeeform" element={<AddEmployeeForm />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;


// // src/App.js
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchEmployees, addEmployee, clearStatus } from './features/employees/employeeSlice';

// function App() {
//   // const { employees, loading, error, success } = useSelector((state) => state.employees);
//   const employeeState = useSelector((state) => state.employees || {});
// const { employees = [], loading, error, success } = employeeState;

//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     gender: "Male",
//     dob: "",
//     mobileno: "",
//     email: "",
//     address: "",
//     employee_id: "",
//     joiningdate: "",
//   });

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 
//     dispatch(addEmployee({ ...formData, mobileno: parseInt(formData.mobileno) }));
//     setFormData({ ...formData, employee_id: "" }); // Reset something if needed
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Employee List</h2>
//       {loading ? <p>Loading...</p> : (
//         <ul>
//           {employees.map((emp, idx) => (
//             <li key={idx}>{emp.first_name} {emp.last_name} - {emp.email}</li>
//           ))}
//         </ul>
//       )}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
      
//       <hr />
//       <h3>Add Employee</h3>
//       <form onSubmit={handleSubmit}>
//         <input name="first_name" placeholder="First Name" onChange={handleChange} required /><br />
//         <input name="last_name" placeholder="Last Name" onChange={handleChange} required /><br />
//         <select name="gender" onChange={handleChange}>
//           <option>Male</option><option>Female</option><option>Other</option>
//         </select><br />
//         <input name="dob" type="date" onChange={handleChange} required /><br />
//         <input name="mobileno" placeholder="Mobile Number" onChange={handleChange} required /><br />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
//         <input name="address" placeholder="Address" onChange={handleChange} required /><br />
//         <input name="employee_id" placeholder="Employee ID" onChange={handleChange} required /><br />
//         <input name="joiningdate" type="date" onChange={handleChange} required max={new Date().toISOString().split("T")[0]}/><br />
//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   );
// }

// export default App;

