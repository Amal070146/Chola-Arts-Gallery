import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import ProfileArtist from "./Pages/ProfileArtist/ProfileArtist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profileartist",
      element: <ProfileArtist />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
