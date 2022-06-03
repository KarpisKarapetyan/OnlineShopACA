import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"

import { useAddBasket } from "../../hooks/useAddBasket"


const WomanJackets = () => {
  

    const [womanJacketsArr, setWomanJacketsArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/allProducts`)
      .then(res => {
        const arr = res.data.filter(item => item.name.some((item) => item === 'woman jacket'))
        setWomanJacketsArr(arr)
      })
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
                          <button onClick={() => addBasket(item)}>Add Basket</button>
                          <p> Size: {item.size} Price: {item.price} </p>
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