import { createBrowserRouter } from "react-router-dom";
import { Home, Login, NotFound, Channel, Video, Short, UserChannel} from "@/pages";
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
        path: '/video/:id',
        element: <Video />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/short',
        element: <Short />
      },
      {
        path: '/userChannel',
        element: <UserChannel />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
  
])

export default router