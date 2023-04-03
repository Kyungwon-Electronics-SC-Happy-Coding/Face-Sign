import { useEffect, useState } from "react";
import { API } from "api/API";
import NeedLoginLayout from "layout/NeedLoginLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const { accessToken } = useSelector((state) => state.userAuth);

  const searchNameState = useState("");
  const [searchName] = searchNameState;
  const [userList, setUserList] = useState([]);
  const [loading] = useState(false);

  useEffect(() => {
    if (!loading && accessToken) {
      API.getUserList({ accessToken }).then((res) => {
        if (res.success) {
          setUserList(res.data);
        }
      });
    }
  }, [searchName, loading, accessToken]);

  return (
    <NeedLoginLayout searchState={searchNameState}>
      <div className="w-full flex flex-col p-4">
        <div className="h-20 w-full flex flex-row">
          <p className="text-3xl font-semibold text-gray-500">Userlist</p>
        </div>

        <table className="w-full table-auto mt-3">
          <thead>
            <tr className="h-12 border-2 text-2xl">
              <th className="w-[15%]"></th>
              <th className="w-[25%]">이름</th>
              <th className="w-[40%]">전화번호</th>
              <th className="w-full">기능</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr
                key={`${user.USER_ID} ${index}`}
                className="text-xl h-12 border-2"
              >
                <td className="w-[15%] text-center">{index + 1}</td>
                <td className="w-[25%] text-center">{user?.USER_NAME}</td>
                <td className="w-[40%] text-center">{user?.USER_PHONE}</td>
                <td className="w-full">
                  <div className="flex flex-row place-content-center">
                    <Link
                      disabled={loading}
                      className="bg-blue-300 rounded-xl w-24 h-full text-center text-xl font-semibold text-blue-600"
                      to={`/detailed-users/${user.USER_ID}`}
                    >
                      상세정보
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </NeedLoginLayout>
  );
};

export default UserList;
