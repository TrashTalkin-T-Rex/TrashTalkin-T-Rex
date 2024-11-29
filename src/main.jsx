import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUpPage from "./Components/AuthComp/SignupPAge";
import LoginPage from "./Components/AuthComp/Login";
import ProfilePage from "./Components/UsersComp/ProfilePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/signup",
    element:<SignUpPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/profile",
    element:<ProfilePage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
