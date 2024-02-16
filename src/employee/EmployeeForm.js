import React,{useState} from "react";
import "./EmployeeForm.css"
import { useContext } from "react";
import { EmployeeContext } from "./employee-context";
import { useDispatch } from "react-redux";
import { employeeActions } from "../Store";

const EmployeeForm= (props) =>{
    const dispatch = useDispatch();
    const [enteredEmpname,setEnteredEmpname]= useState('');
    const [enteredYoe,setEnteredYoe]= useState('');
    const [enteredDob,setEnteredDob]= useState('');
    const empChangeHandler = (event) =>{
        setEnteredEmpname(event.target.value);
    }
    const yoeChangeHandler = (event) =>{
        setEnteredYoe(event.target.value);
    }
    const dobChangeHandler = (event) =>{
        setEnteredDob(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const employeeData={
            empname:enteredEmpname,
            yoe:enteredYoe,
            dob:new Date(enteredDob)
        }
        dispatch(employeeActions.addEmployee(employeeData));
        setEnteredEmpname('');
        setEnteredYoe('');
        setEnteredDob('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-employee__controls">
            <div className="new-employee__control">
                <label>Employee Name</label>
                <input type="text" onChange={empChangeHandler}/>
            </div>
            <div className="new-employee__control">
                <label>Years of experience</label>
                <input type="number" min="0" onChange={yoeChangeHandler}/>
            </div>
            <div className="new-employee__control">
                <label>Date of Birth</label>
                <input type="date" onChange={dobChangeHandler}/>
            </div>
            <div className="new-employee__controls">
                <button type="submit" onSubmit={submitHandler}>Add Employee</button>
            </div>
            </div>
        </form>
    );

}
export default EmployeeForm