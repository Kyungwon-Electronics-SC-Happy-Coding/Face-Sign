import NeedLoginLayout from "layout/NeedLoginLayout";
import Webcam from "react-webcam";
import { useEffect, useRef, useState } from "react";
import { API } from "api/API";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { accessToken } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  const webcamRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneM, setUserPhoneM] = useState("");
  const [userPhoneF, setUserPhoneF] = useState("");
  const [userClassInfo, setUserClassInfo] = useState("");
  const [faceList, setFaceList] = useState([]);
  const [inputMsg, setInputMsg] = useState("");

  const onSubmit = () => {
    setLoading(true);
    if (userName === "") setInputMsg("이름을 입력해주세요");
    else if (userPhone === "") setInputMsg("전화번호를 입력해주세요");
    else if (faceList.length < 5) setInputMsg("사진을 5장이상 찍어주세요");
    else {
      API.addUser({
        accessToken,
        USER_NAME: userName,
        USER_PHONE: userPhone,
        USER_PHONE_F: userPhoneF,
        USER_PHONE_M: userPhoneM,
        USER_CLASS: userClassInfo,
      }).then((res) => {
        navigate("/user-list");
      });
    }
    setLoading(false);
  };

  const onCapture = () => {
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setFaceList((prev) => [...prev, imageSrc]);
    setLoading(false);
  };

  const removeFace = (target) => {
    setFaceList((prev) => prev.filter((face, index) => index !== target));
  };

  useEffect(() => {
    setInputMsg("");
  }, []);

  return (
    <NeedLoginLayout>
      <div className="p-10">
        <div className="mx-auto w-full flex flex-col overflow-hidden transition-all border-2 p-5">
          <p className="text-2xl text-gray-400 font-semibold">이름</p>
          <input
            type="text"
            name="userName"
            value={userName}
            disabled={loading}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-transparent text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold mt-5">전화번호</p>
          <input
            type="tel"
            name="userPhone"
            value={userPhone}
            disabled={loading}
            onChange={(e) => setUserPhone(e.target.value)}
            className="bg-transparent text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
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
            className="bg-transparent text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
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
            className="bg-transparent text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <p className="text-2xl text-gray-400 font-semibold">비고</p>
          <input
            type="text"
            name="userClassInfo"
            value={userClassInfo}
            disabled={loading}
            onChange={(e) => setUserClassInfo(e.target.value)}
            className="bg-transparent text-2xl border-b-2 border-borderblue mb-3 outline-none w-72"
          />
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-72 h-72"
          />
          <button
            onClick={onCapture}
            disabled={loading || faceList.length >= 5}
            className="bg-blue-300 mt-5 rounded-xl w-24 text-center text-xl font-semibold text-blue-600"
          >
            사진찍기
          </button>
          <div className="mt-5 w-full justify-start p-3 overflow-x-scroll grid grid-flow-col-dense scroll-smooth border-2">
            {faceList.map((face, index) => (
              <button
                onClick={() => removeFace(index)}
                key={face}
                className="w-60 opacity-100 hover:opacity-60"
              >
                <img alt={`face ${index + 1}`} src={face} />
              </button>
            ))}
          </div>
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
    </NeedLoginLayout>
  );
};

export default AddUser;
