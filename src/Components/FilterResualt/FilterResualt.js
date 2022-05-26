import { useDispatch, useSelector } from 'react-redux'
import { filterSelector } from '../../redux/slices/filterSlice'
import './FilterResualt.css'



function FilterResualt (){
    const filterData = useSelector(filterSelector)
    const dispatch = useDispatch()

    return(
        <>
 {filterData?.map((item, i) => (
            <div key={i}>
                <img src={item.img} />
                <span>{item.price}</span>
            </div>
        ))}
        </>
    )
       
    
}
export default FilterResualt