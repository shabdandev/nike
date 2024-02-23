import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import EditProduct from "../components/admin/EditProduct";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/",
      element: <MainPage />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/regis",
      element: <Register />,
      id: 5,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
