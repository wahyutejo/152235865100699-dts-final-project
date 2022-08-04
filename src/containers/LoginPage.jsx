import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegister";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/Theme";

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginOrRegisterForm loginOrRegister={"login"} sx={{ mt: 20 }} />;
    </ThemeProvider>
  );
};
export default LoginPage;
