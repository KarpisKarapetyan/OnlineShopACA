import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {removeUser, userSelector} from "../../redux/slices/userSlice"
import "./Header.css"
import Register from "./Registration/Register"
import Links from "./Links/Links"
import logo from "../Images/LogoZootMood.png"
import searchLogo from "../../project_pictures/Vector.png"
import {basketSelector, setIsBasketShown} from "../../redux/slices/basketSlice"
import OurBaskets from "./Basket/OurBaskets"
import {searchThunk} from "../../redux/thunks/searchThunk"
import {useLogout} from "../../hooks/useLogout"
import BasketModal from "../Header/Basket/BasketModal/BasketModal"
import FavoriteWindow from './Favorite/FavoriteWindow'





function Header() {
  const isBasketShown = useSelector(basketSelector)
  const logout = useLogout()

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const user = useSelector(userSelector)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    navigate("../searchResult")
    dispatch(searchThunk(data))
  }

  const userLogin = () => {
    navigate("../login")
  }

  const goToRegister = () => {
    navigate("../Registration")
  }

  
  const goToHomePage = () => {
    navigate("../homePage")
  }


 

  return (
    <div className="headerBody">
      <div className="siteName">
        <div className="logoAndLinks">
          <div className="logoContainer" onClick={goToHomePage}>
            <img src={logo} className="logo" />
          </div>

          <Links />
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label>
              <div className="submit">
                <button type="submit" className="submitBtn">
                  <img src={searchLogo} />
                </button>
              </div>

              <input
                {...register("search")}
                type="search"
                className="search"
              ></input>
            </label>
          </form>
        </div>
      </div>
      <div className="favoriteDIV" >
        <FavoriteWindow/>
      </div>
      
      <div className="headerRight">
        <div className="betweenLogin">
          {user && (
            <div className="basketTrue">
              <div
                className="divBasket"
                onClick={() => dispatch(setIsBasketShown(!isBasketShown))}
              >
                <BasketModal />
              </div>
              <div className="divBasket loginBasket">
                <label>
                  <span className="spanLogin">{user.name}</span>
                </label>
              </div>
            </div>
          )}
        </div>
        <div>
          {!user && (
            <div className="loginAndRegister">
              <div className="divBasket loginBasket">
                <label className="betweenLogin" onClick={userLogin}>
                  Login
                </label>
              </div>
              <div>
                <label onClick={goToRegister}>
                  <Register />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {user && (
        <div className="logOutDiv">
          <button className="logOut" onClick={logout}>
            Log out
          </button>
        </div>
      )}
    </div>
  )
}
export default Header
