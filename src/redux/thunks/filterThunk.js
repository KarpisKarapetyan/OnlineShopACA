import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { mainUrl } from "../../api/api";


export const filterThunk = createAsyncThunk('filter', async () => {
    const dispatch = useDispatch()
    await axios.get(`${mainUrl}/apranq`)
    .then((res) => {
      const currentArr = res.data.filter(item =>  
      item.price === price && item.size=== size)
      dispatch(setFilterData(currentArr))
     // navigate("../FilterResualt")
    })

    return curr
})