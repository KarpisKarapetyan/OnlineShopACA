import { useDispatch, useSelector } from 'react-redux'
import { filterSelector } from '../../redux/slices/filterSlice'
import './FilterResualt.css'

function FilterResualt (){
    const filterData = useSelector(filterSelector)
    const dispatch = useDispatch()

    console.log(filterData);
    return(
        <div>
           asd
        </div>
    )
}
export default FilterResualt