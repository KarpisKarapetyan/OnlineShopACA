import { useDispatch } from "react-redux"
import { setIsBasketShown } from "../../../redux/slices/basketSlice"
import logo from "../../Images/BasketLogo.png"

function Basket() {
    const dispatch = useDispatch()

  return (

      <div
       className="divBasket"
       onClick={() => dispatch(setIsBasketShown(true))}
       >
        <img className="logoBasket" src={logo}></img>
      </div>

  )
}
export default Basket
