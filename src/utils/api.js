import axios from "axios";

const apiUrl = import.meta.env.VNN247_API_URL;

const API = axios.create({
  //   baseURL: "http://localhost:3000/api",
  baseURL: apiUrl + "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`, // nếu có
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error.message);
    return Promise.reject(error);
  }
);

export default API;
