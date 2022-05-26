import { createSlice } from "@reduxjs/toolkit"
import { searchExtraReducer } from "../thunks/searchThunk"

const initialState = {
    searchArr: []
}

const searchSlice = createSlice({
    name: "searchArr",
    initialState,
    reducers: {
        setSearchArr: (state, {payload}) => {
            state.searchArr = payload
        }
    },
    extraReducers: (builder) => {
        searchExtraReducer(builder)
    }
})

export const searchSelector = state => state.searchArr.searchArr

export const {setSearchArr} = searchSlice.actions

export default searchSlice.reducer