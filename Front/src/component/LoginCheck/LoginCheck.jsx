import BaseLayout from "layout/BaseLayout";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const LoginCheck = ({ children }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!userAuth.isLogin) {
      navigate("/login", {
        replace: true,
        state: { nextLink: location.pathname },
      });
    }
  });

  if (userAuth.isLogin) {
    return children;
  } else {
    return <BaseLayout />;
  }
};

export default LoginCheck;
