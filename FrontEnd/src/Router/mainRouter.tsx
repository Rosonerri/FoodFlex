import { createBrowserRouter } from "react-router-dom"
import Layout from "../block/Layout"
import HomeScreen from "../Pages/homeScreen"
import Register from "../Auth/Register"
import SignIn from "../Auth/SignInScreen"
import Verify from "../Auth/verifyScreen"
import SingleDetail from "../Pages/SingleDetail"
export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
                <Layout/>
        ),
        children: [{index: true, element: <HomeScreen/>},
    {
        index: true,
        path: "/detailedPage",
        element: <SingleDetail/>
    }
    ]
    },
    {
        path: "/detailedPage",
        element: <Register/>  
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <SignIn/>
    },

    {
        path: "/verify",
        element: <Verify/>
    },
    {
        path: "/detail",
        element: <SingleDetail/>
    }
])