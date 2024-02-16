import logo from './logo.svg';
import './App.css';
import EmployeeName from './employee/EmployeeName';
import NewEmployee from './employee/NewEmployee';
import { useState } from 'react';
import Employee from './employee/Employee';
import EmployeeFilter from './employee/EmployeeFilter';
import EmployeeForm from './employee/EmployeeForm';
import { EmployeeContext } from './employee/employee-context';
import EmployeeContextProvider from './employee/employee-context';
import { UseSelector, useSelector } from 'react-redux';
import { useEffect } from 'react';

const App=()=> {
  const items=useSelector(state=>state.items);
  useEffect(
    ()=>{
      fetch('https://reactcustomer-94acd-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json',{
        method:'PUT',
        body:JSON.stringify(items)
      })
    },
    [items]
  )

  return (
    <EmployeeContextProvider>
      <div>
        <NewEmployee>
        <EmployeeForm/>
        </NewEmployee>
        <Employee/>
      </div>
      </EmployeeContextProvider>
  );
}

export default App;