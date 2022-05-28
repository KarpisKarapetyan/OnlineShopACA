import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { mainUrl } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import regBackground from "../../Images/Registration.png"

function  Registration () {
  const [isRegisterFailed, setIsRegisterFailed] = useState(true);
  const {register,handleSubmit,formState: { errors }} = useForm();
  const navigate = useNavigate() 

  const onSubmit = (data) => {
    if(data.password === data.rePassword){
    axios.post(`${mainUrl}/users`, {
      name: data.login,
      password: data.password,
    });
    
    setIsRegisterFailed(false);
    setTimeout(() => {
      navigate("../Login")
    }, 1000);
  }
  else{
    alert('password are not the same');
  }
}
  return (
    <div className="registrationMain">
      <div className="formMainDIV">
      <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="registrationDiv">
            <p> Register </p>
          <label> 
            <input
              {...register("login", {
                required: "Field is required",
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
                  required: "Field is required",
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
          <button type="submit">Submit</button>
        </div>
      </form>
      {!isRegisterFailed && <p>Registration succeed!</p>}
      
      </div>
      <div className="registrationImage">
              <img src={regBackground}></img>
      </div>
    </div>
  );
};

export default Registration;
