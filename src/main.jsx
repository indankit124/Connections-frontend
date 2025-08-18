import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import LoggedInPage from "./Components/LoggedInPage";


const appRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />

  },{path:"/signIn",
    element:<SignIn/>
  },
  {path:"/signUp",
    element:<SignUp/>
  },
  {path:"/loggedInPage",
    element:<LoggedInPage/>
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
