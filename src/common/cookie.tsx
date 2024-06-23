import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = cookies.get("user");

export const setCookie = async (res: any) => {
  cookies.set("user", res.data.data.accessToken, {
    maxAge: 60 * 60 * 3,
    path: "/",
  });
};

export const removeCookie = cookies.remove("user", {});
