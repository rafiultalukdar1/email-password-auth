import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../component/Home";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  }
]);