import { useEffect, useState, Children, cloneElement } from 'react'
import './Caruousel.css'
import {FaChevronLeft , FaChevronRight } from 'react-icons/fa'

function Carousel ({children}){
    const [pages,Setpages] = useState([])
    const [offset,setOffset] = useState(0)
    const PAGE_WiDTH = 450
    
    useEffect(()=>{
        Setpages(
            Children.map(children,(child) =>{
                return cloneElement(child,{
                    style : {
                        height : '100%',
                        minWidth : `${PAGE_WiDTH}px`,
                        maxWidth : `${PAGE_WiDTH}px`
                    }
                })
            })
        )
    },[])

    const leftClick = ()=>{
        alert("depi dzax")
        setOffset(currentOffset=>{
            const newOffset = currentOffset + PAGE_WiDTH
            return Math.min(newOffset, 0)
        })
    }

    const rightClick = ()=>{
        alert("depi aj")
        setOffset(currentOffset=>{
            const newOffset = currentOffset - PAGE_WiDTH
            const maxOffset = -(PAGE_WiDTH*(pages.length - 1))
            return Math.max(newOffset,maxOffset)
        })
    }
    return (
        <div className='main-container'>
            <FaChevronLeft className='arrow' onClick={leftClick}/>
                <div className='window'>
                    <div className='all-PagesContanier '
                    style={{
                        transform : `translateX(${offset}px)`
                    }}
                    >
                        {pages}
                    </div>
                </div>     
                <FaChevronRight className='arrow' onClick={rightClick} />

        </div>
    )
}
export default Carousel