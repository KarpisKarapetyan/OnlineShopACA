import {useDispatch, useSelector} from "react-redux"
import {basketSelector, setIsBasketShown} from "../../../redux/slices/basketSlice"
import "./Basket.css"

const OurBaskets = () => {
  const isBasketShown = useSelector(basketSelector)
  const dispatch = useDispatch()
  console.log(isBasketShown);

  return (
    <div className={isBasketShown ? "ourBaskets active" : "ourBaskets"} onClick={() => dispatch(setIsBasketShown(false))}>
      <div className="blur" />
      <div className="basket_content" onClick={(e) => e.stopPropagation()}>
        <div className="basket_header">BASKET</div>
        <ul>
          <li>asdsadashgd</li>
        </ul>
      </div>
    </div>
  )
}

export default OurBaskets
