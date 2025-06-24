// src/Api/axiosConfig.js
import axios from "axios";

// AUTH & PRODUCT URLs
const authUrl = "https://tureappapiforreact.onrender.com/api";

const productUrl = "https://leaf-craft.onrender.com/api";

// AUTH instance
const authInstance = axios.create({
  baseURL: authUrl,
});

// PRODUCT instance
const productInstance = axios.create({
  baseURL: productUrl,
});

// Token interceptor
const tokenInterceptor = (config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
};

// Apply interceptor
authInstance.interceptors.request.use(tokenInterceptor, (error) => Promise.reject(error));
productInstance.interceptors.request.use(tokenInterceptor, (error) => Promise.reject(error));

// Export
export { authInstance, productInstance };
