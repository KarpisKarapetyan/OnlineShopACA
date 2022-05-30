import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAddBasket } from '../../hooks/useAddBasket'
import { filterSelector } from '../../redux/slices/filterSlice'
import './FilterResualt.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteSelector, userBasketSelector } from '../../redux/slices/userSlice'
import { useAddFavorite } from '../../hooks/useAddFavorite'
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'

function FilterResualt (){
    const filterData = useSelector(filterSelector)
    const favoriteArr = useSelector(favoriteSelector)
    const userBasket = useSelector(userBasketSelector)
    const goBasket = useAddBasket()
    const goFavorite = useAddFavorite()
    console.log(favoriteArr)

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
                        <div className='dressDetailsCarusel'
                            // onClick={() => goBasket(item)}
                        >
                            <div className='iconsCarusel' >
                                    <label className='iconsCaruselBas' onClick={()=> goBasket(item)}> 
                                    <AddShoppingCartIcon className={userBasket.includes(item) ? "activFavorite" : ''}/> </label>
                                </div>
                                <div className='iconFavourite'> 
                                    <label className='iconsCaruselFav' onClick={()=> goFavorite(item)}> 
                                    <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/> </label>
                                    
                                </div>
                                <ImageZoom img = {filterData[i].location}/> 
                        <p>  {item.price}AMD / {item.size}</p> </div>
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