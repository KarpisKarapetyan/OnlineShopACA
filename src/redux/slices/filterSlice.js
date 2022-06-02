import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    filterData : []
}

const filterSlice = createSlice({
    name: "filterData",
    initialState,
    reducers: {
        setFilterData: (state, {payload}) => {
            state.filterData = payload
        }
    },
    
})

export const filterSelector = state => state.filterData.filterData

export const {setFilterData} = filterSlice.actions

export default filterSlice.reducer