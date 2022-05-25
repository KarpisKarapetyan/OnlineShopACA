import { useDispatch, useSelector } from 'react-redux'
import { filterSelector } from '../../redux/slices/filterSlice'
import './FilterResualt.css'

function FilterResualt (){
    const filterData = useSelector(filterSelector)
    const dispatch = useDispatch()

    return(       
            <div>
                {filterData?.map((item,i) =>(
                    <div key = {i}>
                        <img src={item.img} />
                        <span> {item.price}</span>
                    </div>
                ))}
            </div>
     
    )
}
export default FilterResualt