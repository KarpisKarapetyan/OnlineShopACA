import {useDispatch, useSelector} from "react-redux"
import {
  basketSelector,
  setIsBasketShown,
} from "../../../redux/slices/basketSlice"
import "./Basket.css"
import BasketComponent from "./BasketCompoent/BasketComponent"

const OurBaskets = () => {
  const isBasketShown = useSelector(basketSelector)
  const dispatch = useDispatch()

  return (
    <div
      className={isBasketShown ? "ourBaskets active" : "ourBaskets"}
      onClick={() => dispatch(setIsBasketShown(false))}
    >
      <div className="blur" />
      <div className="basket_content" onClick={(e) => e.stopPropagation()}>
        <div className="basket_header">BASKET</div>
        <BasketComponent />
      </div>
    </div>
  )
}

export default OurBaskets
