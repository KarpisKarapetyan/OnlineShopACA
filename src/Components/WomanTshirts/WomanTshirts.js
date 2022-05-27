import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"

const WomanTshirts = () => {

    const [womanTshirtsArr, setWomanTshirtsArr] = useState([])
    console.log("=================================================")
    useEffect(() => {
      axios.get(`${mainUrl}/womanTshirts`)
      .then(res => setWomanTshirtsArr(res.data))
    }, []) 
     
    return (
      <div>
        {
            womanTshirtsArr.map((item,i)=>{
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
  
  export default WomanTshirts
  

