import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about-us",
        element: <App />,
    },
    {
        path: "/domain",
        element: <App />,
    },
    {
        path: "/hosting",
        element: <App />,
        children:[
            {
                path: "/hosting/dedicated-server",
                element: <App/>
            }
        ]
    },
]);


export const PageRoute = () => {
    return (
        <RouterProvider router={router} />
    )
}