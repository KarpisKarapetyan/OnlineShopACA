import {useSelector} from "react-redux"
import {searchSelector} from "../../redux/slices/searchSlice"

const SearchResult = () => {
  const searchArr = useSelector(searchSelector)

  if (searchArr.length !== 0) {
    return (
      <div>
        {searchArr.map(({price, size, location, id}) => {
          return (
            <div key={id}>
              <img src={location} />
              <div>{price}</div>
              <div>{size}</div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div>sorry</div>
  }
}

export default SearchResult
