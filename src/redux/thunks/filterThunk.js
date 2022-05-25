import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {mainUrl} from "../../api/api"

export const filterThunk = createAsyncThunk("filter", async ({price, size}) => {
  const response = await axios.get(`${mainUrl}/apranq`)
  const currentArr = response.data.filter(
    (item) => item.price === price && item.size === size
  )
  return currentArr
})

const filterThunkPending = () => {
  filterData: []
}

const filterThunkFulfilld = (state, {payload}) => {
  state.messageData = payload
  console.log(payload);
}

const filterThunkRejected = (state) => {
  state.messageData = []
}

export const filterExtraReducer = (builder) => {
  builder
    .addCase(filterThunk.pending, filterThunkPending)
    .addCase(filterThunk.fulfilled, filterThunkFulfilld)
    .addCase(filterThunk.rejected, filterThunkRejected)
}
