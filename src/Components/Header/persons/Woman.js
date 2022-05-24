import { useNavigate } from "react-router-dom"

function Woman (){
    const navigate = useNavigate()

    const goToWoman = () =>{
        navigate('./Woman')
    }

 
    return(
        <div className="persons">
            
            <label className="label" onClick={goToWoman}>
                Woman 
            </label>
        </div>
    )
}
export default Woman 