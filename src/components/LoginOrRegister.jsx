import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth, loginWithEmailAndPassword, registerWithEmailAndPassword } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { Typography, Grid, Box, Button, TextField } from "@mui/material";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [credential, setCredential] = useState({ email: "", password: "" });

  const textFieldEmailOnChange = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChange = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegister = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" stlye={{ minHeight: "95vh" }}>
      <Box component="form" noValidate sx={{ border: "1px solid grey", borderRadius: "1em", p: 1, display: "flex", flexDirection: "column", gap: 1, mt: 20 }}>
        <Typography variant="body1">{loginOrRegister === "login" ? "Login Page" : "Register Page"}</Typography>

        <TextField label="email" type="email" variant="outlined" size="small" value={credential.email} onChange={textFieldEmailOnChange} />

        <TextField label="password" type="Password" variant="outlined" size="small" value={credential.password} onChange={textFieldPasswordOnChange} />

        <Button variant="outlined" size="small" onClick={buttonLoginOrRegister}>
          {loginOrRegister === "login" ? "Login" : "Register"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">Buat Akun</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">Masuk</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;
