import {useRoutes} from "react-router-dom"
import Home from "./home/Home"
import Auth from "./auth/Auth";
const RouteController = () => {

  return useRoutes ([
    {
      path: "/",
      element: <Home/>
  },
  {
      path: "/auth",
      element: <Auth/>
  }
  ]  )
}

export default RouteController