import EmployeeName from "./EmployeeName";
import "./EmployeeList.css"
const EmployeeList = props =>{
    if (props.items.length ===0){
        return <h2 className="employee-list__fallback">Found no employee</h2>
    }
    return(
        <ul className="employee-list">
            {
                props.items.map((employee)=>(<EmployeeName
                    key={employee.id}
                    empname={employee.empname}
                    dob={employee.dob}
                    yoe={employee.yoe}/>))
            }
        </ul>
    )
}
export default EmployeeList;