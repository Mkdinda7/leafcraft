import { toast } from "react-toastify";
import { authInstance } from "../axiosInstance";
import AUTH_ENDPOINTS from "../Endpoint/authEndpoint";

export const login = async (data, navigate, setLoading, auth, setAuth) => {
  setLoading(true);
  try {
    const res = await authInstance.post(AUTH_ENDPOINTS.LOGIN, data);
    if (res) {

      setAuth({
        ...auth,
        user: res?.data?.user,
        token: res?.data?.token,
      });
      localStorage.setItem("auth", JSON.stringify(res?.data?.user));
      localStorage.setItem("token", res?.data?.token);
      toast.success(res?.data?.message);
      navigate("/");
      console.log("login", res);
    } else {
      toast.error(res?.data?.message);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log("loginerror", error?.response?.data?.message);
  } finally {
    setLoading(false);
  }
};

export const registerUser = async (newData, navigate, setLoading) => {
  setLoading(true);
  try {
    const res = await authInstance.post(AUTH_ENDPOINTS.REGISTER, newData);
    if (res?.data?.success === 200) {
      toast.success(res?.data?.message);
      navigate("/login");
    } else {
      toast.error(res?.data?.message);
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration failed. Please try again."
    );
    console.log("registerUsererr", error);
  } finally {
    setLoading(false);
  }
};

export const forgotPassword = async (data, navigate, setLoading) => {
  setLoading(true);
  try {
    const res = await authInstance.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
    if (res?.data?.success == true) {
      setLoading(false);
      toast.success(res?.data?.message);
      navigate("/login");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

export const updatePassword = async (
  data,
  navigate,
  setLoading,
  token,
  setAuth
) => {
  setLoading(true);
  try {
    const res = await authInstance.post(AUTH_ENDPOINTS.UPDATE_PASSWORD, data, {
      headers: { "x-access-token": token },
    });
    if (res?.data?.success == true) {
      toast.success(res?.data?.message);
      setAuth({
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      navigate("/login");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};
