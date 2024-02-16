import { createContext, useReducer } from "react";
import { useState } from "react";

export const EmployeeContext = createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state,action){
    const updatedEmployees=[...state]

    if(action.type ==='ADD_EMPLOYEE'){
        const employeeData={
            ...action.payload,
            id: Math.random().toString()
        };

        updatedEmployees.push(employeeData);
    }
    return updatedEmployees;
}


export default function EmployeeContextProvider({children}){
    const DUMP_EMPLOYEES=[
        {id:1,empname:'saksha',dob:new Date(2002,1,17),yoe:1},
        {id:2,empname:'taksha',dob:new Date(2000,4,21),yoe:3},
        {id:3,empname:'shashikala',dob:new Date(1971,4,6),yoe:20},
        {id:4,empname:'keshava',dob:new Date(1970,7,7),yoe:15}
    ];
    
    const[employees,dispatch]=useReducer(employeeReducer,DUMP_EMPLOYEES);

    const addEmployeeHandler=employee=>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload:employee
            }
        )
    }
    const contextValue={
        items: employees,
        onSaveEmployeeData: addEmployeeHandler
    };
    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}
