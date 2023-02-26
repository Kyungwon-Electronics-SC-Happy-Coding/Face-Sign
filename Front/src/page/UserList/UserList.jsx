import BaseLayout from "layout/BaseLayout";
import { useState } from "react";
import { API } from "api/API";

const UserList = () => {
  const searchNameState = useState("");
  const [searchName, setSearchName] = searchNameState;
  const [userList, setUserList] = useState([]);
  const searchState = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState(new Date());
  const [userGender, setUserGender] = useState(true);
  const [hpHighblood, setHpHighblood] = useState(false);
  const [hpDiabetes, setHpDiabetes] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const onSubmit = () => {
    setLoading(true);
    if (userName === "") setInputMsg("이름을 입력해주세요");
    else {
      API.addUser({
        userName,
        userBirth: userBirth.toISOString().split("T")[0],
        userGender,
        hpDiabetes,
        hpHighblood,
      }).finally(() => {
        setInputMsg("");
        setOpenInput(false);
        setLoading(false);
      });
    }
  };

  return (
    <BaseLayout searchState={searchNameState}>
      <div className="w-full flex flex-col p-4">
        <div className="h-20 w-full flex flex-row">
          <p className="text-3xl font-semibold text-gray-500">Userlist</p>
        </div>
      
        <table className="w-full table-auto mt-3">
          <thead>
            <tr className="h-12 border-2 text-2xl">
              <th className="w-[15%]">얼굴</th>
              <th className="w-[25%]">이름</th>
              <th className="w-[40%]">전화번호</th>
              <th className="w-full">기능</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.userID} className="text-xl h-12 border-2">
                <td className="w-[15%] text-center">{user?.userID}</td>
                <td className="w-[25%] text-center">{user?.userName}</td>
                <td className="w-[40%] text-center">
                  {new Intl.DateTimeFormat("ko", {
                    dateStyle: "long",
                  }).format(new Date(user?.userBirth))}
                </td>
                <td className="w-full">
                  <div className="flex flex-row">
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
};

export default UserList;
