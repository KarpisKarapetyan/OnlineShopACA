import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {setAuthRoute} from "../../redux/slices/authSlice"
import {mainUrl} from "../../api/api"
import {setUser} from "../../redux/slices/userSlice"
import classes from "./Login.module.css"

const Login = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    axios.get(`${mainUrl}/users`).then((res) => {
      const user = res.data.find(
        (item) => item.name === data.login && item.password === data.password
      )

      if (user) {
        if (data.save) {
          localStorage.setItem("user", data.login)
        } else {
          sessionStorage.setItem("user", data.login)
        }
        dispatch(setUser(data.login))
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
          log in
        </button>
      </form>

      {(isLoginFailed || errors.login || errors.password) && (
        <div className={classes.goToRegister}>
          <button
            onClick={() => dispatch(setAuthRoute(REGISTRATION))}
            className={classes.registerBtn}
          >
            <p className={classes.registerBtnP}>go to Registration</p>
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
