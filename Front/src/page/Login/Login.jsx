import { API } from "api/API";
import BaseLayout from "layout/BaseLayout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "store/userAuthSlice";

const Login = () => {
  const userAuth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const nextLink = location.state?.nextLink;

  const goNext = () => {
    if (nextLink) navigate(nextLink, { replace: true });
    else navigate("/", { replace: true });
  };

  const login = () => {
    API.login({ id: "admin", pw: "admin1234" }).then((res) => {
      if (res.success) {
        dispatch(
          loginUser({
            accessToken: res.data.token,
          })
        );
        goNext();
      }
    });
  };

  useEffect(() => {
    if (userAuth?.isLogin) {
      goNext();
    }
  });

  return (
    <BaseLayout>
      <button onClick={login} className="w-96 h-96 bg-green-200">
        Login
      </button>
    </BaseLayout>
  );
};

export default Login;
