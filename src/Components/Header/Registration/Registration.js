import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { mainUrl } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import regBackground from "../../Images/Registration.png"
import AlertMUI from "./AlertMUI/AlertMUI"
import ErrorMessage from './AlertMUI/ErrorMessage'

function  Registration () {
  const [isRegisterFailed, setIsRegisterFailed] = useState(true);
  const [errorMessage ,setErrorMessage ] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm();
  const navigate = useNavigate() 

  const onSubmit = (data) => {
    if(data.password === data.rePassword){
      const id = "id" + new Date().getTime()
      const userBasketName = id + 'userBasket'
      const isBasketBtnShownName = id + 'isBasketBtnShown'
      const favoriteName = id + 'favorite'

      axios.post(`${mainUrl}/users`, {
      name: data.login,
      password: data.password,
      id: id,
      userBasket: userBasketName,
      isBasketBtnShown: isBasketBtnShownName,
      favorite: favoriteName
    });

    localStorage.setItem(`${userBasketName}`, JSON.stringify([]))
    localStorage.setItem(`${isBasketBtnShownName}`, JSON.stringify([]))
    localStorage.setItem(`${favoriteName}`, JSON.stringify([]))
    
    setIsRegisterFailed(false);
    setTimeout(() => {navigate("../Login")}, 3000);
  }
  else{
    setErrorMessage(true)
  }
}
  return (
    <div className="registrationMain">
      <div className="formMainDIV">
      <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="registrationDiv">
            <p> Sign up </p>
          <label> 
            <input
              {...register("login", {
                required: "*Field is required",
                  minLength : {
                  value : 3,
                  message : "*Minimum 3 characters for LOGIN!" }
               })}
              type="text"
              placeholder="Choose a login"
            />
            <div className="errorMessage">
              {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
            </div>
          </label>
           <label>
            <input
              {...register("password", { 
                  required: "*Field is required",
                  minLength : {
                  value : 6,
                  message : "*Minimum 6 characters for PASSWORD!" }
              })}
              placeholder="Choose a password"
              type="password"
            />
            <div className="errorMessage">
              {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </div>
          </label>
          <label>
            <input
              {...register("rePassword", { required: true })}
              type="password"
              placeholder="Repeat password"
            />
          </label>
          <button className="regSubmit" type="submit">Submit</button>
        </div>
        <div className="registrationSucces">
          {!isRegisterFailed && <AlertMUI/>} 
          {errorMessage && <ErrorMessage className="errorMessage" />}
        </div>
      </form> 
      </div>

      <div className="registrationImage">
              <img src={regBackground}></img>
      </div>
    </div>
  );
};

export default Registration;
