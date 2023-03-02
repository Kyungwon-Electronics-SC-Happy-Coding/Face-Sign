import axios from "axios";
import UserAPI from "./UserAPI";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const ajax = async (options) => {
  let result;
  await axios(options)
    .then((response) => {
      result = { success: true, data: response?.data };
    })
    .catch((error) => {
      result = { success: false, data: error };
    });
  return result;
};

const login = ({ id, pw }) => {
  try {
    const options = {
      method: "POST",
      url: `/login`,
      data: { id, pw },
    };
    return ajax(options);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const API = { login, ...UserAPI };
