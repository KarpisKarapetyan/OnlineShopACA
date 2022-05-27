import { useForm } from "react-hook-form";
import { useState } from "react";
import { AUTH_TABS } from "../../../helpers/constants";
import "./Registration.css";
import axios from "axios";
import { mainUrl } from "../../../api/api";
import { useDispatch } from "react-redux";
import { setAuthRoute } from "../../../redux/slices/authSlice";

const [LOGIN] = AUTH_TABS;

const Registration = () => {
  const [isRegisterFailed, setIsRegisterFailed] = useState(false);
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(data.password === data.rePassword){
    axios.post(`${mainUrl}/users`, {
      name: data.login,
      password: data.password,
    });
    
    setIsRegisterFailed(false);
    setTimeout(() => {
      dispatch(setAuthRoute(LOGIN))
    }, 2000);
  }
  else{
    console.log('password are not the same');
  }
}
  return (
    <div>
      <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="registrationDiv">
          <label>
            {" "}
            LOGIN
            <input
              {...register("login", { required: true, minLength: 4 })}
              type="text"
            />
          </label>
          {" "}
          <label>
            {" "}
            PASSWORD
            <input
              {...register("password", { required: true, minLength: 4 })}
              type="password"
            />
          </label>{" "}
          <label>
            {" "}
            REPEAT PASSWORD
            <input
              {...register("rePassword", { required: true })}
              type="password"
            />
          </label>{" "}
          <button type="submit">REGISTER</button>
        </div>
      </form>
      {!isRegisterFailed && <p>Registration succeed!</p>}
    </div>
  );
};

export default Registration;
