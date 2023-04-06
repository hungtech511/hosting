import Header from "@layouts/Header"
import { Box } from "@mui/material"
import { Suspense, lazy } from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const Home = lazy(() => import("@pages/Home"))
const AboutUs = lazy(() => import("@pages/AboutUs"))
const Domain = lazy(() => import("@pages/Domain"))
const Hosting = lazy(() => import("@pages/Hosting"))

const AuthLayout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="loading....">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback="loading....">
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
