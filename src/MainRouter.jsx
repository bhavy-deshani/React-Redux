import { createBrowserRouter } from "react-router-dom";
import Header from "./CommonCompo/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LoginRegisterPage from "./LoginRegisterPage";
import AccessStoreData from "./Views/GetStoreData";


const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<><Header/> <Home/></>
    },
    {
        path:'/about',
        element:<><Header/> <About/></>
    },
    {
        path:'/contact',
        element:<><Header/> <Contact/></>
    },
    {
        path:'/login',
        element:<><Header/> <LoginRegisterPage/></>
    },
    {
        path: "/acccessstoredata",
        element:<><Header /> <AccessStoreData /></>,
    }
]);


export default MainRouter;