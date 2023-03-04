import { API } from "api/API";
import NeedLoginLayout from "layout/NeedLoginLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const DetailedUser = () => {
  const { accessToken } = useSelector((state) => state.userAuth);
  const { userid } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && accessToken && userid) {
      API.getUser({ accessToken, userid }).then((res) => {
        if (!res.data.result) navigate("/error", { replace: "true" });
        else {
          setUser(res.data.result);
          setLoading(false);
        }
      });
    }
  }, [loading, accessToken, userid, navigate]);

  return (
    <NeedLoginLayout>
      <div> creating page : {user?.USER_NAME} </div>
    </NeedLoginLayout>
  );
};

export default DetailedUser;
