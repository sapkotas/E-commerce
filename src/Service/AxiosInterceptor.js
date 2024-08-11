import axios from "axios";

const http = axios.create({
  timeout:10000,
  baseURL: "https://ecommerce-backend-s55e.onrender.com/api/",

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
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Check if the request is for uploading a file
    if (config.data instanceof FormData) {
      // For file uploads, set Content-Type to multipart/form-data
      config.headers["Content-Type"] = "multipart/form-data";
    }

    console.log("Request sent:", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    console.log("Response received:", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
