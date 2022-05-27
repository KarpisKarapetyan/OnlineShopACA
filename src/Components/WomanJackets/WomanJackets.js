import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./WomanJackets.css"


const WomanJackets = () => {

    const [womanJacketsArr, setWomanJacketsArr] = useState([])  
    useEffect(() => {
      axios.get(`${mainUrl}/womanJackets`)
      .then(console.log("-------------"))
      .then(res => setWomanJacketsArr(res.data))
    }, [])
 
    return (
      <div className="womanJackets">
        <span className='womanJacketsTitle'> Woman Jacets</span>
        <div className="womanJaketsData">
        {
            womanJacketsArr.map((item,i)=>{
                return(
                    <div key={i} className ="womanJacketsItems">
                      <div className='womanJacketsDetails'>
                       <img src={item.location} />
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