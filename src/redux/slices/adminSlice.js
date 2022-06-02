import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin : false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, {payload}) => {
            state.admin = Boolean(payload) 
        }
    }
})

export const adminSelector = state => state.admin.admin

export const {setAdmin} = adminSlice.actions

export default adminSlice.reducer