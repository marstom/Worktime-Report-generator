let isAuth = false;

export const login = (username, password) => {
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
