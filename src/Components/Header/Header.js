import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { adminSelector } from "../../redux/slices/adminSlice"
import {removeUser, userSelector} from "../../redux/slices/userSlice"
import "./Header.css"
import Register from "./Registration/Register"
import Links from "./Links/Links"
import logo from "../Images/LogoZootMood.png"
import searchLogo from "../../project_pictures/Vector.png"
import {basketSelector, setIsBasketShown} from "../../redux/slices/basketSlice"
import {searchThunk} from "../../redux/thunks/searchThunk"
import {useLogout} from "../../hooks/useLogout"
import BasketModal from "../Header/Basket/BasketModal/BasketModal"
import FavoriteWindow from './Favorite/FavoriteWindow'


function Header() {
  const isBasketShown = useSelector(basketSelector)
  const logout = useLogout()
  const admin =useSelector(adminSelector)
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

  const goToAdminPanel = () =>{
    navigate('../adminPanel', {replace: true})
  }

  
  const goToHomePage = () => {
    navigate("../homePage")
  }

  return (
    <div className="headerBody">
      <div className="siteName">
        <div className="logoAndLinks">
          <div className="logoContainer" onClick={goToHomePage}>
            <img src={logo} />
          </div>

          <div className="linksDivInHeader"><Links /></div>
        </div>
        
      {admin && sessionStorage.setItem("admin" , JSON.stringify(admin))}
      {admin && <div className="goAdmin" onClick={goToAdminPanel} >Admin Panel</div> }

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="submit">
                <button type="submit" className="submitBtn">
                  <img src={searchLogo} />
                </button>
              </div>

              <input
                {...register("search")}
                type="text"
                className="search"
              ></input>
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
                  Sign in
                </label>
              </div>
              <div>
                <label className="registerInput" onClick={goToRegister}>
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