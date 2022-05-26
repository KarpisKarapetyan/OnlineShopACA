import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Man from '../Components/Header/persons/Man'
import Woman from '../Components/Header/persons/Woman'
import Kids from '../Components/Header/persons/Kids'
import Registration from "../Components/Header/Registration/Registration";
import { Navigate } from "react-router-dom";
import LearnMore from "../Components/HomePage/LearnMore/LearnMore";
import MakeOrder from "../Components/makeOrder/makeOrder";
import FilterResualt from "../Components/FilterResualt/FilterResualt";
import ManTshirts from "../Components/ManTshirts/ManTshirts";
import SearchResult from "../Components/SearchResult/SearchResult";

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
    },
    {
        path: "LearnMore",
        element: <LearnMore/>
    },
    {
        path: "MakeOrder",
        element: <MakeOrder/>
    },
    {
        path: "FilterResualt",
        element: <FilterResualt/>
    },
    {
        path: "manTshirts",
        element: <ManTshirts />
    },
    {
        path: "searchResult",
        element: <SearchResult />
    }
]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]