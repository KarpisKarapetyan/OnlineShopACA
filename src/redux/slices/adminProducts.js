import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminProduct: []
}

const adminProductSlice = createSlice({
    name: 'adminProduct',
    initialState,
    reducers: {
        setAdminProduct: (state, {payload}) => {
            state.adminProduct = payload 
        }
    }
})

export const adminProductSelector = state => state.adminProduct.adminProduct

export const {setAdminProduct, changeAdminProduct} = adminProductSlice.actions

export default adminProductSlice.reducer