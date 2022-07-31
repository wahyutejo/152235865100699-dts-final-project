import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegister";

const LoginPage = () => {
  return <LoginOrRegisterForm loginOrRegister={"login"} sx={{ mt: 20 }} />;
};

export default LoginPage;
