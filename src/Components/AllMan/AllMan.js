import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteSelector, userBasketSelector } from '../../redux/slices/userSlice'
// import { useAddFavorite } from '../../../hooks/useAddFavorite'
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'
import {useSelector} from "react-redux";
import {useAddFavorite} from "../../hooks/useAddFavorite";


const AllMan = () => {
    const favoriteArr = useSelector(favoriteSelector)
    const userBasket = useSelector(userBasketSelector)
    const [manJacketsArr, setManJacketsArr] = useState([])
    const [manTshirtsArr, setManTshirtsArr] = useState([])
    useEffect(() => {
        axios.get(`${mainUrl}/manJackets`)
            .then(res => setManJacketsArr(res.data))
    }, [])
    useEffect(() => {
        axios.get(`${mainUrl}/manTshirts`)
            .then(res => setManTshirtsArr(res.data))
    }, [])

    const manList = manTshirtsArr.concat(manJacketsArr);
    const goBasket = useAddBasket()
    const goFavorite = useAddFavorite()

    return (
        <div className="bgColorBlue">
            <div className="manTitleContainer"> 
                <span>Men</span>
            </div>
            <div className="manItemContainer">
                {
                    manList.map((item, i) => {
                        return (
                            <div key={i} className="manItem">
                                <img src={item.location}/>
                                <div className="dressDetailsCarusel">
                                    <label className='iconItem' onClick={() => goBasket(item)}>
                                        <AddShoppingCartIcon
                                            className={userBasket.includes(item) ? "activFavorite" : ''}/>
                                    </label>
                                    <label className='iconItem' onClick={() => goFavorite(item)}>
                                    <FavoriteIcon className={favoriteArr.includes(item) ? "activFavorite" : ''}/>
                                    </label>
                                    <ImageZoom img={manList[i].location}/>
                                    <p> {item.price} AMD / {item.size}  </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AllMan