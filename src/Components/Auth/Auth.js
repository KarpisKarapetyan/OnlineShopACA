import { useSelector } from "react-redux"
import { AUTH_TABS } from "../../helpers/constants"
import { authRouteSelector } from "../../redux/slices/authSlice"
import Registration from "../Header/Registration/Registration"
import Login from "../Login/Login"

const [LOGIN, REGISTRATION] = AUTH_TABS

const authComponent = {
    [LOGIN]: <Login />,
    [REGISTRATION]: <Registration />
}

const Auth = () => {
    const authRoute = useSelector(authRouteSelector)

    const MainComponent = useMemo(() => authComponent[authRoute], [authRoute])

    return(
        <>
            {MainComponent}
        </>
    )
}

export default Auth