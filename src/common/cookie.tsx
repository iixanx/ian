import { Cookies } from "react-cookie";

export const setCookie = async (res: any) => {
  window.sessionStorage.setItem("user", res.data.data.accessToken);
};

export const removeCookie = window.sessionStorage.removeItem("user")
