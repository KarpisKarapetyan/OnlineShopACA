import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAddBasket } from '../../hooks/useAddBasket'
import { filterSelector } from '../../redux/slices/filterSlice'
import './FilterResualt.css'

function FilterResualt (){
    const filterData = useSelector(filterSelector)
    const goBasket = useAddBasket()

    return(
        <div className='filterMain' >
            {filterData.length > 0 && 
            <>
            <span className='filterTitle'> Your search results</span>
            <div className='filterDataMain'>
                {filterData.map((item,i) =>(
                    <div key = {i}
                         className = "filterItems"
                    >   
                        <img src={item.location} />
                        <div className='dressDetails'
                            onClick={() => goBasket(item)}
                        >
                        <p> Price: {item.price}AMD  Size: {item.size}</p> </div>
                    </div>
                ))}
            </div>
            </>
            }
            {filterData.length === 0 && 
                <>
                <span className='filterTitle'> The data you requested could not be found </span>
                    <div >
                        <p> You can place any of your orders <NavLink className="linkMore" to="/MakeOrder" >here</NavLink> </p>
                    </div>
                </>
            }
        </div>
     )
}
export default FilterResualt