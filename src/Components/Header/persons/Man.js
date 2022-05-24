import { useNavigate } from "react-router-dom"

function Man (){
    const navigate = useNavigate()

    const goToMan = () =>{
        navigate('./Man')
    }

 
    return(
        <div className="persons">
            
            <label className="label" onClick={goToMan}>
                Man 
            </label>
        </div>
    )
}
export default Man