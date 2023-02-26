import DateSelector from "component/DateSelector";
import BaseLayout from "layout/BaseLayout";
import { useState } from "react";

const AddUser = () => {
  const [openInput, setOpenInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneM, setUserPhoneM] = useState("");
  const [userPhoneF, setUserPhoneF] = useState("");
  const [userClassInfo, setUserClassInfo] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  const onSubmit = () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <BaseLayout>
      <div className="p-10">
        <div className="mx-auto w-full flex flex-col overflow-hidden bg-backwhite transition-all border-2 p-5">
          <p className="text-2xl text-gray-400 font-semibold">이름</p>
          <input
            type="text"
            name="userName"
            value={userName}
            disabled={loading}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-backwhite text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold mt-5">전화번호</p>
          <input
            type="tel"
            name="userPhone"
            value={userPhone}
            disabled={loading}
            onChange={(e) => setUserPhone(e.target.value)}
            className="bg-backwhite text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold mt-5">
            보호자 전화번호1
          </p>
          <input
            type="tel"
            name="userPhone"
            value={userPhoneM}
            disabled={loading}
            onChange={(e) => setUserPhoneM(e.target.value)}
            className="bg-backwhite text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold mt-5">
            보호자 전화번호2
          </p>
          <input
            type="tel"
            name="userPhone"
            value={userPhoneF}
            disabled={loading}
            onChange={(e) => setUserPhoneF(e.target.value)}
            className="bg-backwhite text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold">비고</p>
          <input
            type="text"
            name="userClassInfo"
            value={userClassInfo}
            disabled={loading}
            onChange={(e) => setUserClassInfo(e.target.value)}
            className="bg-backwhite text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          {inputMsg !== "" && (
            <p className="text-xl text-red-500 mt-5">{inputMsg}</p>
          )}
          <button
            onClick={onSubmit}
            disabled={loading}
            className="bg-green-300 mt-5 rounded-xl w-24 text-center text-xl font-semibold text-green-600"
          >
            추가
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AddUser;
