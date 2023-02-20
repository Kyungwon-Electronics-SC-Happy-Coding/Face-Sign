import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

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

export const API = {};
