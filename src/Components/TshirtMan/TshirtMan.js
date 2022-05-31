import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./TshirtMan.css"
import { useAddBasket } from "../../hooks/useAddBasket"
import basketLogo from "../Images/BasketLogo.png";


const TshirtMan = () => {

    const [tshirtManArr, setTshirtManArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/manTshirts`)
      .then(res => setTshirtManArr(res.data))
    }, [])
 
    return (
      <div className="bgColorBlue">
          <div className="manTitleContainer">
              <span> Man Tshirt</span>
          </div>
          <div className="manItemContainer">
              {/*<div className="manRow">*/}
                  {
                      tshirtManArr.map((item,i)=>{
                          return(
                              <div key={i} className ="manItem">
                                  <img src={item.location} />
                                  <div className="manDetails">
                                      <span> Price: {item.price} Size: {item.size} </span>
                                      <button className="itemBasket" onClick={() => addBasket(item)}>
                                          <img src={basketLogo}></img>
                                      </button>

                                  </div>
                              </div>
                          )
                      })
                  }
              {/*</div>*/}
          </div>

      </div>
    )
  }
  
  export default TshirtMan