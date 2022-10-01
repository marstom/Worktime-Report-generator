import { NextApiResponse } from "next";
import { User } from "pages/api/user";

let isAuth = false;

export const login = (username: string, password: string) => {
  if (username === "marstom" && password === "be12Xce*8z!gQxXz") {
    isAuth = true;
  }
  throw new Error("Wrong credentials");
};

export const logout = () => {
  isAuth = false;
};

export const getIsAuth = () => {
  return isAuth;
};

export const unauthorized = (user: User, res: NextApiResponse) => {
  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return true;
  }
  return false;
};
