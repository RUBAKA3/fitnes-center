import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivetRoute({user}) {
  let user1  = user
  return (
    user1 ? <Outlet/>: <Navigate to='login'></Navigate>
  )
}

export default PrivetRoute;
