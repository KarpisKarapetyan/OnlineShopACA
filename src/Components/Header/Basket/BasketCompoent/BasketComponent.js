import { textAlign } from "@mui/system"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useAddBasket} from "../../../../hooks/useAddBasket"
import {useSubtractBasket} from "../../../../hooks/useSubtractBasket"
import {basketBtnShownSelector} from "../../../../redux/slices/basketSlice"
import {userBasketSelector} from "../../../../redux/slices/userSlice"
import BasketAlert from "./BasketAlert/BasketAlert"
import classes from "./BasketComponent.module.css"
import AddCircle from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import LocalMall from '@mui/icons-material/LocalMall';

const BasketComponent = () => {
  const userBasket = useSelector(userBasketSelector)
  const isBasketBtnShown = useSelector(basketBtnShownSelector)
  const [basketArr, setBasketArr] = useState([])
  const [basketPrice, setBasketPrice] = useState(0)
  const [errorMessage,setErrorMessage] = useState(false)
  const addBasket = useAddBasket()
  const subtractBasket = useSubtractBasket()

  const messageBuy = ()=>{
    setErrorMessage(true)
  }

  useEffect(() => {
    sessionStorage.setItem("isBasketBtnShown", JSON.stringify(isBasketBtnShown))
    sessionStorage.setItem("userBasket", JSON.stringify(userBasket))
    
    const newArr = []
    userBasket.forEach((item) => {
      newArr.push({...item})
    })

    const arr = newArr.reduce((acc, item, i) => {
      if (i !== 0) {
        const obj = acc.find((elem) => elem.id === item.id)
        if (obj) {
          const index = acc.indexOf(obj)
          acc[index].count++
          return acc
        } else {
          item.count = 1
          acc.push(item)
          return acc
        }
      } else {
        item.count = 1
        acc.push(item)
        return acc
      }
    }, [])

    const price = newArr.reduce((acc, item) => {
      acc += +item.price
      return acc
    }, 0)

    setBasketPrice(price)
    setBasketArr(arr)
  }, [userBasket])

  
  if(basketArr.length===0){
    return(
      <div className={classes.emptyBasket}>
            <div className={classes.basketTitle}><h3>Basket</h3></div>
            <div><p >You dont have any</p>
            <p> products in your basket  </p>
            </div>
          <div>
          
          <div> {basketPrice} AMD</div>
          <Button onClick={messageBuy} className={classes.buyButton}> Buy <LocalMall/></Button>
          
          </div>
          {errorMessage &&  <BasketAlert errorMessage= {errorMessage} setErrorMessage={setErrorMessage} />
          
          }
      </div>
     
      
      
    )
  }else{
    return (
      <div className={classes.items}>
        <div className={classes.basketTitle}><h3>BASKET</h3></div>
        {basketArr.map((item) => {
          return (
            <div className={classes.basketItem} key={item.id}>
              
              <div className={classes.basketItemImg}>
              
                <img src={item.location} />
              </div>
              <p>{item.count} item</p>
              <div>
               
              <p>
                {" "}
               Price - {item.price} AMD / {item.size}{" "}
              </p>
              </div>
              <div className={classes.plusMinus} >
              <Button onClick={() => addBasket(item)}><AddCircle/></Button>
              <Button onClick={() => subtractBasket(item)}><RemoveCircle /></Button>
              </div>
              

            </div>  
          )
        })}
  
        <div> Sum {basketPrice}</div>
        <Button className={classes.buyButton}> Buy <LocalMall/></Button>
      </div>
    )
  }
}

export default BasketComponent
