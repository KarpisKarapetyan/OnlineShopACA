import {useSelector} from "react-redux"
import {searchSelector} from "../../redux/slices/searchSlice"

const SearchResult = () => {
  const searchArr = useSelector(searchSelector)

  if (searchArr) {
    return (
      <div>
        {searchArr.map(({price, size, location}) => {
          return (
            <div>
              <img src={location} />
              <div>{price}</div>
              <div>{size}</div>
            </div>
          )
        })}
      </div>
    )
  }
  else{
      return (
          <div>oh no</div>
      )
  }
}

export default SearchResult
