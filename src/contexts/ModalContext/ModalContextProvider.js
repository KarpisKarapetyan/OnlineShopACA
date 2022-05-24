import {useState} from 'react'
import Modal from '../../Components/HomePage/Modal/Modal'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({children})=>{
    const [modalOpened ,setModalOpened] = useState(false)
    const [modalContent ,setModalContent] = useState(null)

const openModal = (modalConfig)=>{
    // const { title, children } = modalConfig
    setModalContent(modalConfig)
    setModalOpened(true)
}
const closeModal = ()=>{
    setModalOpened(false)
}

const valueModalProvider = {
    openModal,
    closeModal
}

    return (
        <ModalContext.Provider value = {valueModalProvider}>
            {modalOpened && <Modal {...modalContent}/>}
            {children}
        </ModalContext.Provider>
    )
}