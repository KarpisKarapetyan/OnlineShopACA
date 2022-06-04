import { KIDS_TSHIRT_NAME, MAN_JACKETS_NAME, MAN_TSHIRT_NAME, WOMAN_JACKET_NAME, WOMAN_TSHIRT_NAME } from "../helpers/constants"

export const useSelectItemName = () => {

    const switchName = (name) => {
        let arr = []

        switch (name) {
            case "man tshirt":
                arr = MAN_TSHIRT_NAME
                break;
            case 'woman tshirt':
                arr = WOMAN_TSHIRT_NAME
                break;
            case 'man jacket':
                arr = MAN_JACKETS_NAME
                break;
            case 'woman jacket':
                arr = WOMAN_JACKET_NAME
                break;
            case 'kids tshirt':
                arr = KIDS_TSHIRT_NAME
                break;
            case 'kids jacket':
                arr = KIDS_JACKET_NAME
                break;                
            default:
                arr.push(name)
                break;
        }

        return arr
    }

    return switchName
}