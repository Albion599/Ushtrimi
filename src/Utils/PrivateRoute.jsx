import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ secretkey, children }) => {
  // console.log(secretkey)
  if (secretkey === true) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
