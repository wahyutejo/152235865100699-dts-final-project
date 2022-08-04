import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegister";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/Theme";

const RegisterPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginOrRegisterForm loginOrRegister={"register"} />;
    </ThemeProvider>
  );
};

export default RegisterPage;
