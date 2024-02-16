import EmployeeFilter from './EmployeeFilter';
import './EmployeeName.css'
import React,{useState} from 'react';
import EmployeeDate from './EmployeeDate';
import Card from '../UI/Card';
function EmployeeName(props){
    const [empname,setempname]= useState(props.empname);
    const clickHandler = ()=>{
        console.log('clicked...');
        setempname('Changed!');
    }

    return(
        <div>
        <li>
            <Card className='employee-item'>
                <EmployeeDate date={props.dob} />
                <div className="employee-item_description">
                    <h2>{empname}</h2>
                    <div className="employee-item_price">{props.yoe}</div>
                </div>
            </Card>
        </li>
        </div>
    )

}
export default EmployeeName