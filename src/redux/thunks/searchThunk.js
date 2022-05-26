import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mainUrl } from "../../api/api";

export const searchThunk = createAsyncThunk("search" , async ({search}) => {
    const response = await axios.get(`${mainUrl}/allProducts`)
    console.log(search);

    const arr = response.data.find((item, i) => {
        return item.some(item => {
            return item.name.some((item) => {
                return item === search
            })
        })
    })

    return arr
})

const searchThunkPending = () => {
    searchArr: []
}

const searchThunkFulfilled = (state, {payload}) => {
    console.log("ssssss", payload);
    state.searchArr = payload
}

const searchThunkRejected = (state) => {
    state.searchArr = []
}


export const searchExtraReducer = (builder) => {
    builder
    .addCase(searchThunk.pending, searchThunkPending)
    .addCase(searchThunk.fulfilled, searchThunkFulfilled)
    .addCase(searchThunk.rejected, searchThunkRejected)
}