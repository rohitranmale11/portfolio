import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  // Redirect unauthenticated users to the login page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from login and register pages
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else if (user?.role === "vendor") {
      return <Navigate to="/vendor/dashboard" />;
    } else {
      return <Navigate to="/user/dashboard" />;
    }
  }

  // Restrict users from accessing pages of other roles
  if (isAuthenticated) {
    if (user?.role === "user" && (location.pathname.includes("/admin") || location.pathname.includes("/vendor"))) {
      return <Navigate to="/unauth-page" />;
    }

    if (user?.role === "admin" && (location.pathname.includes("/user") || location.pathname.includes("/vendor"))) {
      return <Navigate to="/unauth-page" />;
    }

    if (user?.role === "vendor" && (location.pathname.includes("/user") || location.pathname.includes("/admin"))) {
      return <Navigate to="/unauth-page" />;
    }
  }

  return <>{children}</>;
};

export default CheckAuth;
