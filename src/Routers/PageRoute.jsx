import Header from "@layouts/Header/Header"
import { Box } from "@mui/material"
import { Suspense, lazy } from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import PreLoading from "@components/PreLoading"

const Home = lazy(() => import("@pages/Home/Home"))
const AboutUs = lazy(() => import("@pages/AboutUs"))
const Domain = lazy(() => import("@pages/Domain"))
const Hosting = lazy(() => import("@pages/Hosting"))

const AuthLayout = () => {
  return (
    <Outlet />
  )
}

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PreLoading/>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<PreLoading/>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/domain",
        element: (
          <Suspense fallback="loading....">
            <Domain />
          </Suspense>
        ),
      },
      {
        path: "/hosting",
        element: (
          <Suspense fallback="loading....">
            <Hosting />
          </Suspense>
        ),
        children: [
          {
            path: "/hosting/dedicated-server",
            element: (
              <Suspense fallback="loading....">
                <Hosting />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

export const PageRoute = () => {
  return <RouterProvider router={router} />
}
