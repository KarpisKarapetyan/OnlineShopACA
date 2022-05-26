import { createSlice } from "@reduxjs/toolkit"
import { filterExtraReducer } from "../thunks/filterThunk"

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
    extraReducers: (builder) => {
        filterExtraReducer(builder)
    }
})

export const filterSelector = state => state.filterData.filterData

export const {setFilterData} = filterSlice.actions

export default filterSlice.reducer