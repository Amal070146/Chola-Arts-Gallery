import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import ProfileArtist from "./Pages/ProfileArtist/ProfileArtist";
import Notfound from "./Pages/pageNotfound/notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profileartist/:id",
      element: <ProfileArtist />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
    {
      path: "/404",
      element: <Notfound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
