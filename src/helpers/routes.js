import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Woman from '../Components/Header/persons/Woman'
import Registration from "../Components/Header/Registration/Registration";
import { Navigate } from "react-router-dom";
import LearnMore from "../Components/HomePage/LearnMore/LearnMore";
import MakeOrder from "../Components/makeOrder/makeOrder";
import FilterResualt from "../Components/FilterResualt/FilterResualt";
import SearchResult from "../Components/SearchResult/SearchResult";
import WomanTshirts from "../Components/WomanTshirts/WomanTshirts";
import WomanJackets from "../Components/WomanJackets/WomanJackets";
import TshirtMan from "../Components/TshirtMan/TshirtMan";
import JacketMan from "../Components/JacketMan/JacketMan";
import KidsTshirt from "../Components/KidsTshirt/KidsTshirt";
import KidsJackets from "../Components/KidsJackets/KidsJackets";
import AdminPanel from "../Components/AdminPanel/AdminPanel";
import AllMan from "../Components/AllMan/AllMan";
import AllKids from "../Components/AllKids/AllKids";
import AllWoman from "../Components/AllWoman/AllWoman";


const MAIN_ROUTES = [
    
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "Woman",
        element: <Woman/>
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
        path: "/adminPanel",
        element: <AdminPanel />
    },
    {
        path: "homePage",
        element: <HomePage/>
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
    {
        path: "Kids",
        element: <AllKids />
    }

]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]