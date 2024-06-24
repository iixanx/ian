export const setCookie = async (res: any) => {
  localStorage.setItem("user", res.data.data.accessToken);
};

export const removeCookie = localStorage.removeItem("user");
