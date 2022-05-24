import axios from "axios";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { mainUrl } from "../../../api/api";
import './Filter.css'

function Filter (){
    const {register,handleSubmit,formState: { errors },} = useForm();
    const [inputData ,setInputData] = useState([])

    const onSubmit = (data) => {
       const {price ,size} = data
       setInputData(prev => {
         
         prev.push(price,size)
         return prev
       })
       console.log("inputData -->", inputData)
    };
  
    useEffect(()=>{
      axios.get(`${mainUrl}/apranq`)
      .then((res) => {
        const dress = res.data.filter(item => 
        item.price === inputData[0] && item.size===inputData[1])
console.log("res -->" , res)
console.log("dress -->" , dress)
      })
    },[])

    return (
      <div>
        <form className="inputsForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputsDiv">
            <label>
              PRICE
              <input
                {...register("price", { 
                  required: "Field is required",
                  minLength : {
                    value : 4,
                    message : "*Minimum 4 characters for price!"
                  }
                 })}
                type="number"
              />
              
            <div className="errorPrice">
              {errors?.price && <p>{errors?.price?.message || "Error!"}</p>}
            </div>
            </label>
            <label>
              SIZE
              <input
                {...register("size", {
                   required: "Field is required" ,
                   maxLength: {
                   value : 5,
                   message : "*Maximum 5 letters!"
                   }
                  })}
                type="text"
              />
              <div className="errorPrice">
              {errors?.size && <p>{errors?.size?.message || "Error!"}</p>}
            </div>
            </label>
            <button type="submit">FILTER</button>
          </div>
        </form>
      </div>
        
    )
}
export default Filter