import { ajax } from "./API";

const getUserList = ({ accessToken }) => {
  try {
    const options = {
      method: "GET",
      url: `/user`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return ajax(options);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getUser = ({ accessToken, userid }) => {
  try {
    const options = {
      method: "GET",
      url: `/user/${userid}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return ajax(options);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const addUser = ({
  accessToken,
  USER_PHONE,
  USER_NAME,
  USER_PHONE_M,
  USER_PHONE_F,
  USER_CLASS,
}) => {
  try {
    const options = {
      method: "POST",
      url: `/user`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        USER_PHONE,
        USER_NAME,
        USER_PHONE_M,
        USER_PHONE_F,
        USER_CLASS,
      },
    };
    return ajax(options);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const UserAPI = { getUserList, getUser, addUser };

export default UserAPI;
