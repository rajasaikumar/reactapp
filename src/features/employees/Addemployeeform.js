import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees, addEmployee } from './employeeSlice';
import { useNavigate } from 'react-router-dom';

function App() {
  const { employees = [], error, success } = useSelector((state) => state.employees);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "Male",
    dob: "",
    mobileno: "",
    email: "",
    address: "",
    employee_id: "",
    joiningdate: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    dispatch(addEmployee({ ...formData, mobileno: parseInt(formData.mobileno) }));
    dispatch(fetchEmployees()); 
    navigate('/');
    setFormData({ ...formData }); 
  };



  return (
    <div style={{ padding: 20 }}>
     
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      
      <hr />
      
      <div className="container d-flex justify-content-center mt-5">
  <form
    onSubmit={handleSubmit}
    className="w-100 p-4 border rounded shadow bg-light"
    style={{ maxWidth: '500px' }}
  >
    <h3 className="mb-4 text-center">Add Employee</h3>

    <div className="mb-3">
      <input
        name="first_name"
        className="form-control"
        placeholder="First Name"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <input
        name="last_name"
        className="form-control"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <select name="gender" className="form-select" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>

    <div className="mb-3">
      <input
        name="dob"
        type="date"
        className="form-control"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <input
        name="mobileno"
        className="form-control"
        placeholder="Mobile Number"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <input
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <input
        name="address"
        className="form-control"
        placeholder="Address"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <input
        name="employee_id"
        className="form-control"
        placeholder="Employee ID"
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-4">
      <input
        name="joiningdate"
        type="date"
        className="form-control"
        onChange={handleChange}
        required
        max={new Date().toISOString().split('T')[0]}
      />
    </div>

    <div className="text-center">
      <button type="submit" className="btn btn-primary px-5">
        Add Employee
      </button>
    </div>
  </form>
</div>


    </div>
  );
}

export default App;

