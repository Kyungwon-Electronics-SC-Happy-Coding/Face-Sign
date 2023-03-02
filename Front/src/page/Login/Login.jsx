import { API } from "api/API";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "store/userAuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    API.login({ id: "admin", pw: "admin1234" }).then((res) => {
      if (res.success) {
        dispatch(
          loginUser({
            accessToken: res.data.accessToken,
          })
        );
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <div>
      <button onClick={login} className="w-96 h-96 bg-green-200">
        Login
      </button>
    </div>
  );
};

export default Login;
