import { useState ,useContext} from "react";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeName from "./EmployeeName"
import Card from "../UI/Card";
import "./Employee.css"
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "./employee-context";
import {useSelector} from "react-redux";

const Employee=(props)=>{
    const items=useSelector(state=>state.items);
    const[filteredYear,setFilteredYear]=useState('1971');
    const filteredYearHandler= selectedYear=>{
        setFilteredYear(selectedYear);
    }
    const filteredEmployees=items.filter(employee =>{
        return employee.dob.getFullYear().toString() === filteredYear;
    });
    
    return(
        <Card className="employees">
            <EmployeeFilter selected={filteredYear} onChangeFilter={filteredYearHandler}/>
            <EmployeeList items={filteredEmployees}/>
        </Card>
    );
}
export default Employee;