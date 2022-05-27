import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"


const WomanJackets = () => {

    const [womanJacketsArr, setWomanJacketsArr] = useState([])
    console.log("**************************************************")    
    useEffect(() => {
      axios.get(`${mainUrl}/womanJackets`)
      .then(res => setWomanJacketsArr(res.data))
    }, [])
 
    return (
      <div>
        {
            womanJacketsArr.map((item,i)=>{
                return(
                    <div key={i}>
                        <div> <img src={item.location} /></div>
                        <div>{item.price}</div>
                        <div>{item.size}</div>
                    </div>
                )
            })
        }
      </div>
    )
  }
  
  export default WomanJackets