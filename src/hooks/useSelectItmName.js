import { useState } from "react"
import { KIDS_TSHIRT_NAME, MAN_JACKETS_NAME, WOMAN_JACKET_NAME, WOMAN_TSHIRT_NAME } from "../helpers/constants"

export const useSelectItemName = (name) => {
    const [nameArr, setNameArr] = useState([])

    switch (name) {
        case "man tshirt":
            setNameArr(MAN_JACKETS_NAME)
            break;
        case 'woman tshirt':
            setNameArr(WOMAN_TSHIRT_NAME)
            break;
        case 'man jacket':
            setNameArr(MAN_JACKETS_NAME)
            break;
        case 'woman jacket':
            setNameArr(WOMAN_JACKET_NAME)
            break;
        case 'kids tshirt':
            setNameArr(KIDS_TSHIRT_NAME)
            break;
        case 'kids jacket':
            setNameArr(KIDS_JACKET_NAME)
            break;                
        default:
            setNameArr([name])
            break;
    }

    return nameArr
}