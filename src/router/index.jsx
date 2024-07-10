import { createBrowserRouter } from "react-router-dom";
import { Home, Login, NotFound,Channel ,Video} from "@/pages";
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