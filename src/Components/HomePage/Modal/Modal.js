import { useContext, useState } from 'react'
import { ModalContext } from '../../../contexts'
import Filter from '../inputsFilter/Filter'
import './Modal.css'

 function Modal (){
     const {closeModal} = useContext(ModalContext)
     const [closing, setClosing] = useState(false)

     const exitInputs = ()=>{
        setClosing(true)
        const closeTimeout = setTimeout(()=>{
            closeModal()
            clearTimeout(closeTimeout)
        },300)
     }
     const backBlackStyle = closing ? ' backBlack backBlack-hide' : 'backBlack'
    return(
        <>
        <div className= {backBlackStyle} onClick={exitInputs}>
            <div className='modal' onClick={(e)=>e.stopPropagation()}>
                <div modalMain>
                    <Filter/>
                </div>
            </div>      
        </div>
        
        </>
        
    )
}
export default Modal
