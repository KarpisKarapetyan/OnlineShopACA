import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"


const AllWoman = () => {
  

    const [allWomanArr, setAllWomanArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/womanJackets`)
      .then(res => setAllWomanArr(res.data))
      }, [])
    useEffect(() => {
        axios.get(`${mainUrl}/womanTshirts`)
        .then(res => setAllWomanArr((prev)=>{
            prev.push(...res.data)
          return prev}))
      }, [])
  

    const addBasket = useAddBasket()
 
    return (
      <div className="womanJackets">
        <span className='womanJacketsTitle'> All Woman </span>
        <div className="womanJaketsData">
        {
            allWomanArr.map((item,i)=>{
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
  
  export default AllWoman

