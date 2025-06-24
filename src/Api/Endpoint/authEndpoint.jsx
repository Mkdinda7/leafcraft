const baseURL="https://tureappapiforreact.onrender.com/api"

const AUTH_ENDPOINTS = {
  LOGIN: `${baseURL}/login`,
  REGISTER: `${baseURL}/register`,
  FORGOT_PASSWORD: `${baseURL}/forget-password`,
  UPDATE_PASSWORD: `${baseURL}/update-password`,
};

export default AUTH_ENDPOINTS;