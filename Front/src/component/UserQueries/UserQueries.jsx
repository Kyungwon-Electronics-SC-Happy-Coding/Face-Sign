import { useSelector } from "react-redux";

export const NoLogin = ({ children }) => {
  const userAuth = useSelector((state) => state.userAuth);
  return userAuth?.isLogin ? null : children;
};

export const NeedLogin = ({ children }) => {
  const userAuth = useSelector((state) => state.userAuth);
  return userAuth?.isLogin ? children : null;
};

const UserQueries = { NoLogin, NeedLogin };

export default UserQueries;
