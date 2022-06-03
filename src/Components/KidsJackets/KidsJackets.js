import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import "./KidsJackets.css"
import { useAddBasket } from "../../hooks/useAddBasket"

const KidsJackets = () => {

    const [kidsJacketsArr, setKidsJacketsArr] = useState([])
   
    useEffect(() => {
      axios.get(`${mainUrl}/allProducts`)
      .then( console.log("================================================="))
      .then(res => {
        const arr = res.data.filter(item => item.name.some((item) => item === 'kids jacket'))
        setKidsJacketsArr(arr)
    })
    }, []) 
    const addBasket = useAddBasket()
     
    return (
      <div className="kidsJackets">
         <span className='kidsJacketsTitle'> Kids Jacets</span>
         <div className= "kidsJacketsData" >
         {
            kidsJacketsArr.map((item,i)=>{
                return(
                    <div key={i}  className ="kidsJacketsItems">
                        <div className="kidsJacketsDetailsImij">
                          <img src={item.location} />
                        </div>
                        <div className='kidsJacketsDetails'
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
  
export default KidsJackets
  


