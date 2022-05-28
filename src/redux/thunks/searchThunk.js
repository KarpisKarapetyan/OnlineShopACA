import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {mainUrl} from "../../api/api"

export const searchThunk = createAsyncThunk("search", async ({search}) => {
  const response = await axios.get(`${mainUrl}/allProducts`)
  const arr = []

  response.data.forEach((item) => {
    const boolean = item.name.some(item => item === search)

    if(boolean){
      arr.push(item)
    }
  })

  return arr
})

const searchThunkPending = () => {
  searchArr: []
}

const searchThunkFulfilled = (state, {payload}) => {
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
