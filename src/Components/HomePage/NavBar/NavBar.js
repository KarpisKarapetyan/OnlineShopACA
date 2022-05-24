import React, {useContext} from 'react'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext'


import './NavBar.css'


function NavBar (){ 
    const { openModal } = useContext(ModalContext)

    const openInputs = ()=>{
        openModal()
    }

    return (
        <div className='NavBar'> 
            <div className="navInput">
                    <div className='filter' onClick={ openInputs } >
                        Filter
                        <button className='navInputBtn' onClick={ openInputs }>Filter</button>
                    </div>
            </div>

        </div>
    )
}
export default NavBar