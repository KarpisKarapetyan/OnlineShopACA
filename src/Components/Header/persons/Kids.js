import './persons.css'

import { useNavigate } from "react-router-dom"

function Kids (){
    const navigate = useNavigate()

    const goToKids = () =>{
        navigate('./Kids')
    }

 
    return(
        <div className="persons">
            
            <label className="label" onClick={goToKids}>
                Kids 
            </label>
        </div>
    )
}
export default Kids 