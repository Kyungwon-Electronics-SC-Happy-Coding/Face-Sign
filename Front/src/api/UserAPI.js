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

const UserAPI = { getUserList, getUser };

export default UserAPI;
