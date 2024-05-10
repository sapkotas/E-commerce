import axios from "axios";
const http = axios.create({
  baseURL: "https://ecommerce-backend-s55e.onrender.com/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer <token>",
    Accept: "*/*",
    // Add any other custom headers here
  },
});
// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const accessToken = localStorage.getItem("accessToken");

    // If access token is available, add it to the Authorization header
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log("Request sent:", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log("Response received:", response);
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
