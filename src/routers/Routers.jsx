import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../component/Home";
import Registration from "../component/pages/Registration/Registration";
import Login from "../component/pages/Login/Login";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'registration',
        Component: Registration
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  }
]);