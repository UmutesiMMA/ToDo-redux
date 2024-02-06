import { createSlice } from "@reduxjs/toolkit";
const initialState = {task:''}
const addSlice = createSlice({
    name:"manageTask",
    initialState,
    reducers:{
        addTask(state,action){
            state.task = action.payload
        }
    }
}
)
export const {addTask} = addSlice.actions
export default addSlice.reducer