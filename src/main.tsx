import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.tsx";
import Home from "./Pages/Home.tsx";
import Login from "./Pages/Login.tsx";
import SignUp from "./Pages/SignUp.tsx";
import DashboardLayout from "./Layout/DashboardLayout.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoute.tsx";
import Profile from "./Pages/User/Profile.tsx";
import BikeDetails from "./Pages/BikeDetails.tsx";
import Rentals from "./Pages/User/Rentals.tsx";
import AddBike from "./Pages/Admin/AddBike.tsx";
import Allbikes from "./Pages/Admin/Allbikes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
        // product routes
        {
            path: "/bike/:id",
            element:<BikeDetails/>
            
        },

      // auth routes
      {
        path:"login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <DashboardLayout />  </PrivateRoute >,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path :"profile",
        element:<Profile/>
      },
      {
        path: "rentals",
        element:<Rentals/>
      },

      // Admin routes
      {
        path: "addbike",
        element: <AddBike/>
      },
      {
        path: "allbikes",
        element: <Allbikes/>
      },

    ]
  }
]);
  

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}/>

      <Toaster duration={1000} />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
