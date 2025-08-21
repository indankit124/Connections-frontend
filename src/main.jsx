import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import LoggedInPage from "./Components/LoggedInPage";
import { appStore, persistor } from "./utils/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import UserProfile from "./Components/UserProfile";
import FeedAndConnectionPage from "./Components/feedAndConnectionPage";
import FollowRequest from "./Components/FollowRequest";
import Feed from "./Components/Feed";

const appRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />

  },{path:"/signIn",
    element:<SignIn/>
  },
  {path:"/signUp",
    element:<SignUp/>
  }
  ,
  {path:"/loggedInPage",
    element:<LoggedInPage/>,
    children:[{
    path: "",
    element: <FeedAndConnectionPage/>,
    children:[{
    path: "",
    element: <Feed/>,},
      
      
      {path:"followRequest",
    element:<FollowRequest/>
  }
    ]

  },{
    path: "userProfile",
    element: <UserProfile/>

  },
   ]
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}>
   <PersistGate loading={null} persistor={persistor}>  <RouterProvider router={appRouter} /></PersistGate>

  </Provider>
);
