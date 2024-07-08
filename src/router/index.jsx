import { createBrowserRouter } from "react-router-dom";
import { Home, Login, NotFound,Channel} from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/channel/:id',
    element: <Channel />
  },
  {
    path: '*',
    element: <NotFound />
  },
])

export default router