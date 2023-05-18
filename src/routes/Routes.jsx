import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blogs/Blog";
import ChefRecipes from "../pages/Chef Recipes/ChefRecipes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=> fetch('https://tasty-recipe-server-arifin1987.vercel.app/chefs')
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader:({params})=>fetch(`https://tasty-recipe-server-arifin1987.vercel.app/chefs/${params.id}`)
            },
            {
                path:'*',
                element:<NotFoundPage></NotFoundPage>
              }
            
        ]
      },

]);

export default router;