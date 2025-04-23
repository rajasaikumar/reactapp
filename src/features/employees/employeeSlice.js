
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api-uovu.onrender.com/employees'; 


export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const response = await axios.get('https://api-uovu.onrender.com/employees');
  console.log("API Response:", response.data); 
  return response.data;
});


export const addEmployee = createAsyncThunk(
    'employees/add',
    async (employee, { rejectWithValue }) => {
      try {
        const payload = { ...employee, mobileno: parseInt(employee.mobileno) };
        const response = await axios.post(`${baseUrl}/employees`, payload);
        return response.data;
      } catch (err) {
        const errorDetail = err.response?.data?.detail;
  
      
        if (Array.isArray(errorDetail)) {
          return rejectWithValue(errorDetail[0]?.msg || 'Validation failed');
        }
  
        return rejectWithValue(errorDetail || 'Something went wrong');
      }
    }
  );
  
  
const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    loading: false,
    error: null,
    success: null,
    count:2
  },
  reducers: {
    clearStatus: (state) => {
      state.error = null;
      state.success = null;
    },
    increment:(state)=>{
      state.count +=1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply:(state)=>{
      state.count *=2;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.success = action.payload.message;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.error = action.payload || "Error adding employee";
      });
      
  },
});

export const { clearStatus,increment,decrement,multiply } = employeeSlice.actions;
export default employeeSlice.reducer;
