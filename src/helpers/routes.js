import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Man from '../Components/Header/persons/Man'
import Woman from '../Components/Header/persons/Woman'
import Kids from '../Components/Header/persons/Kids'
import Registration from "../Components/Header/Registration/Registration";
import { Navigate } from "react-router-dom";

const MAIN_ROUTES = [
    {
        path: "homePage",
        element: <HomePage/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "Man",
        element: <Man/>
    },
    {
        path: "Woman",
        element: <Woman/>
    },
    {
        path: "Kids",
        element: <Kids/>
    },
    {
        path: "Registration",
        element: <Registration />
    }

]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]