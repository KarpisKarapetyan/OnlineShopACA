import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mainUrl } from "../../../api/api";
import { ModalContext } from "../../../contexts";
import { filterSelector, setFilterData } from "../../../redux/slices/filterSlice";
import './Filter.css'

function Filter (){
    const {register,handleSubmit,formState: { errors },} = useForm();
    const dispatch = useDispatch()
    const filterData = useSelector(filterSelector)
    const navigate = useNavigate()
    const {closeModal} = useContext(ModalContext)
    
    const onSubmit = (data) => {
      const {price ,size} = data
      axios.get(`${mainUrl}/allProducts`)
      .then((res) => {
        const currentArr = res.data.filter(item =>  
        item.price === price && item.size=== size)
        dispatch(setFilterData(currentArr))
        closeModal()
        navigate("../FilterResualt")  
      })
      
      
    };
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
                placeholder="Select price"
              />
              
            <div className="errorMessage">
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
                placeholder="Select size"
              />
              <div className="errorMessage">
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