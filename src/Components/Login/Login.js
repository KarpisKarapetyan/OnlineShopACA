import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {mainUrl} from "../../api/api"
import {setAdmin} from '../../redux/slices/adminSlice'
import { adminSelector } from "../../redux/slices/adminSlice"
import {
  setIsBasketBtnShown,
  subtractIsBasketBtnShown,
} from "../../redux/slices/basketSlice"
import {
  setUser,
  setUserBasket,
  subTract,
  subTractFavorite,
  subtractUnseenBasket,
} from "../../redux/slices/userSlice"
import classes from "./Login.module.css"
import loginImage from "../Images/Registration.png"
import StorageAlert from "./AnotherLocalStorageAlert/AnotherLocalStorageAlert"

const Login = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errorMessage,setErrorMessage] = useState(false)
  const admin = useSelector(adminSelector)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const goToRegistration = () => {
    navigate("../Registration")
  }

  const onSubmit = (data) => {
    axios.get(`${mainUrl}/users`).then((res) => {
      const user = res.data.find(
        (item) => item.name === data.login && item.password === data.password
      )

      if (user) {
        const obj = {
          name: user.name,
          id: user.id,
          userBasket: user.userBasket,
          favorite: user.favorite,
        }
        if (data.save) {
          localStorage.setItem("user", JSON.stringify(obj))
        } else {
          sessionStorage.setItem("user", JSON.stringify(obj))
        }
        if(user.name ==="Karpis"){dispatch(setAdmin(true))}
        dispatch(setUser(user))
        if(JSON.parse(localStorage.getItem(`${user.userBasket}`))){
          dispatch(setUserBasket(JSON.parse(localStorage.getItem(`${user.userBasket}`))))
          sessionStorage.setItem("userBasket", JSON.stringify(JSON.parse(localStorage.getItem(`${user.userBasket}`))))
        }else{
          setErrorMessage(true)
        }
        if(JSON.parse(localStorage.getItem(`${user.favorite}`))){
          dispatch(subTractFavorite(JSON.parse(localStorage.getItem(`${user.favorite}`))))
          sessionStorage.setItem("favorite", JSON.stringify(JSON.parse(localStorage.getItem(`${user.favorite}`))))
        }else{
          setErrorMessage(true)
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
      <div className={classes.formDiv}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div className={classes.loginDiv}>
            <p> Sign In </p>
            <label>
              <input
                {...register("login", {require: true})}
                type="text"
                placeholder="login"
                className={classes.userInput}
              />
              <div>{errors?.login?.type}</div>
            </label>

            <label>
              <input
                {...register("password", {require: true})}
                type="password"
                placeholder="password"
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
            {(isLoginFailed || errors.login || errors.password) && (
              <div className={classes.goToRegister}>
                <button
                  onClick={goToRegistration}
                  className={classes.registerBtn}
                >
                  <p className={classes.registerBtnP}>Go to Registration</p>
                </button>
            {errorMessage && <StorageAlert errorMessage= {errorMessage} setErrorMessage={setErrorMessage}/> }
              </div>
            )}
          </div>
        </form>
      </div>

      <div className={classes.loginImage}>
        <img src={loginImage}></img>
      </div>
    </div>
  )
}

export default Login