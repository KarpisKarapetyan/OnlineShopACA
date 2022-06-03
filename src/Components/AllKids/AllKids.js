import axios from "axios"
import {useEffect, useState} from "react"
import {mainUrl} from "../../api/api"
import { useAddBasket } from "../../hooks/useAddBasket"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteSelector, userBasketSelector } from '../../redux/slices/userSlice'
import ImageZoom from '../HomePage/ImageZoom/ImageZoom'
import {useSelector} from "react-redux";
import {useAddFavorite} from "../../hooks/useAddFavorite";


const AllKids = () => {
    const favoriteArr = useSelector(favoriteSelector)
    const userBasket = useSelector(userBasketSelector)
    const [allKids, setAllKids] = useState([])
    useEffect(() => {
        axios.get(`${mainUrl}/allProducts`).then((res) => {
          const arr = res.data.filter(
            (item) =>
              item.name.some((item) => item === "kids tshirt") ||
              item.name.some((item) => item === "kids jacket")
          )
          setAllKids(arr)
        })
      }, [])

    const goBasket = useAddBasket()
    const goFavorite = useAddFavorite()

    return (
        <div className="bgColorBlue">
            <div className="manTitleContainer">
                <span>Kids</span>
            </div>
            <div className="manItemContainer">
                {
                    allKids.map((item, i) => {
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
                                    <ImageZoom img={allKids[i].location}/>
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

export default AllKids