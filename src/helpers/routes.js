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
import WomanTshirts from "../Components/WomanTshirts/WomanTshirts";
import WomanJackets from "../Components/WomanJackets/WomanJackets";
import TshirtMan from "../Components/TshirtMan/TshirtMan";
import JacketMan from "../Components/JacketMan/JacketMan";
import KidsTshirt from "../Components/KidsTshirt/KidsTshirt";
import KidsJackets from "../Components/KidsJackets/KidsJackets";
import AllMan from "../Components/AllMan/AllMan";
import AllWoman from "../Components/AllWoman/AllWoman";


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
    },
    {
        path: "womanTshirt",
        element: <WomanTshirts />
    },
    {
        path: "womanJacket",
        element: <WomanJackets />
    },
    {
        path: "tshirtMan",
        element: <TshirtMan />
    },
    {
        path: "kidsJacket",
        element: <KidsJackets />
    },
    {
        path: "Womans",
        element: <AllWoman />
    },
    {
        path: "kidsTshirt",
        element: <KidsTshirt />
    },
    {
        path: "jacketMan",
        element: <JacketMan />
    },
    {
        path: "Man",
        element: <AllMan />
    },

]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]