import axios from "axios"
import {useState} from "react"
import {setAdmin} from '../../redux/slices/adminSlice'
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {mainUrl} from "../../api/api"
import { adminSelector } from "../../redux/slices/adminSlice"
import { setIsBasketBtnShown, subtractIsBasketBtnShown } from "../../redux/slices/basketSlice"
import {setUser, setUserBasket, subTract, subTractFavorite, subtractUnseenBasket} from "../../redux/slices/userSlice"

import classes from "./Login.module.css"

const Login = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors},} = useForm()
  const admin = useSelector(adminSelector)

  const goToRegistration =  ()=>{
    navigate("../Registration")
  }

  const onSubmit = (data) => {
    axios.get(`${mainUrl}/users`).then((res) => {
      const user = res.data.find(
        (item) => item.name === data.login && item.password === data.password
      )

      if(user){
        if (data.save) {
          localStorage.setItem("user", JSON.stringify(user))
        } else {
          sessionStorage.setItem("user", JSON.stringify(user))
        }
        if(user.name ==="Karpis"){
          dispatch(setUser(user))
          if(user.userBasket.length !== 0){
            dispatch(setUserBasket(user.userBasket))
            dispatch(subtractIsBasketBtnShown(user.isBasketBtnShown))
            dispatch(subTractFavorite(user.favorite))
            sessionStorage.setItem('userBasket', JSON.stringify(user.userBasket))
            sessionStorage.setItem('isBasketBtnShown', JSON.stringify(user.isBasketBtnShown))
            sessionStorage.setItem('favorite', JSON.stringify(user.favorite))
          }else{
            sessionStorage.setItem('userBasket', JSON.stringify([]))
            sessionStorage.setItem('isBasketBtnShown', JSON.stringify(user.isBasketBtnShown))
            sessionStorage.setItem('favorite', JSON.stringify(user.favorite))
          }
          console.log(admin)
          navigate("../homePage", {replace: true})
          dispatch(setAdmin(true))
          
          console.log(admin)
        }
        }
       


      if (user) {
        if (data.save) {
          localStorage.setItem("user", JSON.stringify(user))
        } else {
          sessionStorage.setItem("user", JSON.stringify(user))
        }
        dispatch(setUser(user))
        if(user.userBasket.length !== 0){
          dispatch(setUserBasket(user.userBasket))
          dispatch(subtractIsBasketBtnShown(user.isBasketBtnShown))
          dispatch(subTractFavorite(user.favorite))
          sessionStorage.setItem('userBasket', JSON.stringify(user.userBasket))
          sessionStorage.setItem('isBasketBtnShown', JSON.stringify(user.isBasketBtnShown))
          sessionStorage.setItem('favorite', JSON.stringify(user.favorite))
        }else{
          sessionStorage.setItem('userBasket', JSON.stringify([]))
          sessionStorage.setItem('isBasketBtnShown', JSON.stringify(user.isBasketBtnShown))
          sessionStorage.setItem('favorite', JSON.stringify(user.favorite))
        }
        navigate("../homePage", {replace: true})
      } else {
        setIsLoginFailed(true)
        alert("user is not found!")
      }
    })
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label className={classes.label}>
          <span>LOGIN</span>
          <input
            {...register("login", {require: true})}
            type="text"
            className={classes.userInput}
          />
          <div>{errors?.login?.type}</div>
        </label>

        <label className={classes.label}>
          <span>PASSWORD</span>
          <input
            {...register("password", {require: true})}
            type="password"
            className={classes.userInput}
          />
          <div>{errors?.password?.type}</div>
        </label>

        <label className={classes.checkbox}>
          <input type="checkbox" {...register("save")} />
          <span className={classes.remember}>remember me?</span>
        </label>

        <button type="submit" className={classes.loginBtn}>
          Log in
        </button>
      </form>

      {(isLoginFailed || (errors.login || errors.password)) && (
        <div className={classes.goToRegister}>
          <button onClick={goToRegistration}
            className={classes.registerBtn}
          >
            <p   className={classes.registerBtnP}>Go to Registration</p>
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
