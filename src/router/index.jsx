import { createBrowserRouter } from "react-router-dom";
import { Home, Login, NotFound,Channel} from "@/pages";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/channel/:id',
        element: <Channel />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
])

export default router