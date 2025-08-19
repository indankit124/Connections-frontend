import { createSlice } from "@reduxjs/toolkit";


const loginInfoSlice= createSlice({
    name:"loginInfo",
    initialState:{
        info:null
    },
    reducers:{
        addInfo:(state,action)=>{
            state.info=action.payload;
        },
        clearLoggedInInfo:(state)=>{
            state.info.length=0;
        }
    }
})

export default loginInfoSlice.reducer;
export const {addInfo, clearLoggedInInfo} = loginInfoSlice.actions;