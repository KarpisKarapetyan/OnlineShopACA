import { NavLink, useNavigate } from "react-router-dom";
import background from "../../Images/OrderBack.png";

function Orders() {
  const navigate = useNavigate()

  return (
    <div className="orders">
      <div onClick={()=> navigate("../MakeOrder")} className="orderClick">
        <div className="orderClickShadow">
          <img src={background}></img>
        </div>
      </div>
      <div className="orderText">
        <h2>Private order</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum
          fermentum nisl, in accumsan nibh faucibus sit amet. Sed egestas
          sagittis nibh, nec efficitur mi porttitor vel. Suspendisse eget
          ullamcorper est, nec venenatis leo. Fusce fermentum blandit
          scelerisque. Morbi nec lacus sit amet justo feugiat laoreet
          sollicitudin tincidunt odio.
        </p>
        <NavLink className="linkMore"
         to="/LearnMore">Learn More</NavLink>

      </div>
    </div>
  );
}
export default Orders;
