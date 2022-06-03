import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAddProduct: 0
}

const isAddProductSlice = createSlice({
    name: 'isAddProduct',
    initialState,
    reducers: {
        setIsAddProduct: (state, {payload}) => {
            state.isAddProduct += payload 
        }
    }
})

export const isAddProductSelector = state => state.isAddProduct.isAddProduct

export const {setIsAddProduct} = isAddProductSlice.actions

export default isAddProductSlice.reducer