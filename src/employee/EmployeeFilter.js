import './EmployeeFilter.css'
const EmployeeFilter=(props)=>{
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }
    return(
        <div className='employee-filter'> 
        <div className='employee-filter__control'>
            <label>Filter by year  </label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2002">2002</option>
                <option value="2000">2000</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="2020">2020</option>
            </select>
            </div>
        </div>
    );

}
export default EmployeeFilter