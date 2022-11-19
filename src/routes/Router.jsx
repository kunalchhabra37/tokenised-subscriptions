import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Renew from "../pages/Renew/Renew";
import Fetch from "../pages/Fetch/Fetch";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Home />} path="" />
        <Route element={<Buy />} path="buy" />
        <Route element={<Renew />} path="renew" />
        <Route element={<Fetch />} path="fetch" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
