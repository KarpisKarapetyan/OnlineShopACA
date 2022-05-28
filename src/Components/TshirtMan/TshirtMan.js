import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./TshirtMan.css"
import { useAddBasket } from "../../hooks/useAddBasket"


const TshirtMan = () => {

    const [tshirtManArr, setTshirtManArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/manTshirts`)
      .then(res => setTshirtManArr(res.data))
    }, [])
 
    return (
      <div className="tshirtMan">
        <span className='tshirtManTitle'> Man Tshirt</span>
        <div className="tshirtManData">
        {
            tshirtManArr.map((item,i)=>{
                return(
                    <div key={i} className ="tshirtManItems">
                      <div className='tshirtManDetails'>
                            <img src={item.location} />
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
  
  export default TshirtMan