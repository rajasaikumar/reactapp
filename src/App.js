import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './features/employees/Employeelist'
import AddEmployeeForm from './features/employees/Addemployeeform';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
   <div>

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



