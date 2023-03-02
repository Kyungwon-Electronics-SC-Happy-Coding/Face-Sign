import { ajax } from "./API";

const getUserList = ({ accessToken }) => {
  try {
    const options = {
      method: "GET",
      url: `/user`,
      headers: {
        Authorization: accessToken,
      },
    };
    return ajax(options);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const UserAPI = { getUserList };

export default UserAPI;
