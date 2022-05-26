import { useEffect, useState, Children, cloneElement } from 'react'
import './Caruousel.css'
import {FaChevronLeft , FaChevronRight } from 'react-icons/fa'

function Carousel ({children}){
    const [pages,Setpages] = useState([])
    const [offset,setOffset] = useState(0)
    const PAGE_WiDTH = 421
    
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
    },[children])

    const leftClick = ()=>{
        setOffset(currentOffset=>{
            const newOffset = currentOffset + PAGE_WiDTH
            return Math.min(newOffset, 0)
        })
    }

    const rightClick = ()=>{
        setOffset(currentOffset=>{
            const newOffset = currentOffset - PAGE_WiDTH
            const maxOffset = -(PAGE_WiDTH*(pages.length - 3))
            return Math.max(newOffset, maxOffset)
        })
    }
    return (
        <div className='mainContainer'>
            <FaChevronLeft className='arrow' onClick={leftClick}/>
                <div className='window'>
                    <div className='allPagesContanier '
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