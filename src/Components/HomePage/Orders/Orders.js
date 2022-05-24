import background from "../../Images/OrderBack.png";



function Orders() {
  const toOrder = ()=>{
    alert("chatch bags")
  }

  return (
    <div className="orders">
      <div onClick={toOrder} className="orderClick">
        <div className="orderClickShadow">
          <img src={background}></img>
        </div>
      </div>
      <div className="orderText">
        <h2>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐՆԵՐ</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum
          fermentum nisl, in accumsan nibh faucibus sit amet. Sed egestas
          sagittis nibh, nec efficitur mi porttitor vel. Suspendisse eget
          ullamcorper est, nec venenatis leo. Fusce fermentum blandit
          scelerisque. Morbi nec lacus sit amet justo feugiat laoreet
          sollicitudin tincidunt odio.
        </p>
        <a href="">LEARN MOREEEEEEEE</a>

      </div>
    </div>
  );
}
export default Orders;
