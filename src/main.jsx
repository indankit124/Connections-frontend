import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";


const appRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
  {
path:"/home",
element:<Home/>
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
