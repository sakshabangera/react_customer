import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const DUMP_EMPLOYEES=[
    {id:1,empname:'saksha',dob:new Date(2002,1,17),yoe:1},
    {id:2,empname:'taksha',dob:new Date(2000,4,21),yoe:3},
    {id:3,empname:'shashikala',dob:new Date(1971,4,6),yoe:20},
    {id:4,empname:'keshava',dob:new Date(1970,7,7),yoe:15}
];

const initialState={items: DUMP_EMPLOYEES};
const employeeSlice= createSlice({
    name: 'employee',
    initialState: initialState,
    reducers:{
        addEmployee(state,action){
            const employeeData={
                ...action.payload,
                id: Math.random().toString()
            };
    
            state.items.push(employeeData);

        }
    }
});
export const sendEmployeeData = (employeeData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://reactcustomer-94acd-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json', {
                method: 'PUT',
                body: JSON.stringify(employeeData),
              });

              if(!response.ok) {
                throw new Error("Sending expense data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
}

const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});
export default employeeStore;
export const employeeActions=employeeSlice.actions;