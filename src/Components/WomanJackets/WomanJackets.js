import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./WomanJackets.css"
import { useAddBasket } from "../../hooks/useAddBasket"


const WomanJackets = () => {
  

    const [womanJacketsArr, setWomanJacketsArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/womanJackets`)
      .then(res => setWomanJacketsArr(res.data))
    }, [])

    const addBasket = useAddBasket()
 
    return (
      <div className="womanJackets">
        <span className='womanJacketsTitle'> Woman Jacets</span>
        <div className="womanJaketsData">
        {
            womanJacketsArr.map((item,i)=>{
                return(
                    <div key={i} className ="womanJacketsItems">
                        <div className="womanJacketsDetailsImij">
                          <img src={item.location} />
                        </div>
                        <div className='womanJacketsDetails'
                        >
                         
                          <p> Size: {item.size} Price: {item.price} </p>
                          <button onClick={() => addBasket(item)}>Add Basket</button>
                        </div>
                      </div>
                    )
            })
        }
        </div>
      </div>
    )
  }
  
  export default WomanJackets