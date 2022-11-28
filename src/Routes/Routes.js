import UserLayout from "../Layout/UserLayout";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Orders from "../Pages/Orders/Orders";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Users/Login");
const { default: Register } = require("../Pages/Users/Register");

export const router = createBrowserRouter([
    {path:'/',
    errorElement:<Errorpage></Errorpage>,
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/about',element:<About></About>},
        {path:'/services',element:<Services></Services>},
        {path:'/home',element:<Home></Home>},
        {path:'/contact',element:<Contact></Contact>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>},
        {path:"/checkout/:id",
        loader:async({params})=>fetch(`https://genius-car-server-nu-opal.vercel.app/services/${params.id}`),
        element:<Checkout></Checkout>}
    ]
    },
    {
    path:"/genius-car",
    errorElement:<Errorpage></Errorpage>,
    element:<UserLayout></UserLayout>,
    children:[
        {path:'/genius-car/login',element:<Login></Login>},
        {path:'/genius-car/register',element:<Register></Register>},
    ]
    }
])