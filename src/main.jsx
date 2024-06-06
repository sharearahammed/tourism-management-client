import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthConfiguration from "./assets/Components/Authconfiguration/Authconfiguration.jsx";
import { HelmetProvider } from "react-helmet-async";
import Login from "./assets/Components/Login/Login.jsx";
import Register from "./assets/Components/Register/Register.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import AddTouristsSpot from "./assets/Components/AddTouristsSpot/AddTouristsSpot.jsx";
import UpdateTouristsSpot from "./assets/Components/UpdateTouristsSpot/UpdateTouristsSpot.jsx";
import ViewDetails from "./assets/Components/HomeTouristsSpots/ViewDetails.jsx";
import PrivatePortes from "./assets/Components/PrivatePortes/PrivatePortes.jsx";
import MyList from "./assets/Components/MyList/MyList.jsx";
import AllTouristSpot from "./assets/Components/AllTouristSpot/AllTouristSpot.jsx";
import CountryTouristSpot from "./assets/Components/Country/CountryTouristSpot.jsx";
import AllTouristSpotViewDetails from "./assets/Components/AllTouristSpot/AllTouristSpotViewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/addAllTouristsSpot",
    element: (
      <PrivatePortes>
        <AddTouristsSpot></AddTouristsSpot>
      </PrivatePortes>
    ),
  },
  {
    path: "/updateTouristsSpot/:id",
    element: (
      <PrivatePortes>
        <UpdateTouristsSpot></UpdateTouristsSpot>
      </PrivatePortes>
    ),
    loader: ({ params }) =>
      fetch(
        `http://localhost:5000/alltouristsSpot/${params.id}`
      ),
  },
  {
    path: "/viewDetails/:id",
    element: (
      <PrivatePortes>
        <ViewDetails></ViewDetails>
      </PrivatePortes>
    ),
    loader: ({ params }) =>
      fetch(
        `http://localhost:5000/touristsSpot/${params.id}`
      ),
  },
  {
    path: "/mylist",
    element: (
      <PrivatePortes>
        <MyList></MyList>
      </PrivatePortes>
    ),
  },
  {
    path: "/allTouristSpot",
    element: <AllTouristSpot></AllTouristSpot>,
  },
  {
    path: "/allTouristSpotViewDetails/:id",
    element: 
      <PrivatePortes>
        <AllTouristSpotViewDetails />
      </PrivatePortes>
    
  },
  {
    path: "/countryTourismSpot/:id",
    element: <CountryTouristSpot></CountryTouristSpot>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthConfiguration>
        <RouterProvider router={router} />
      </AuthConfiguration>
    </HelmetProvider>
  </React.StrictMode>
);
