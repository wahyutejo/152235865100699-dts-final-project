import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import NewsDetail from "./containers/NewsDetail";
import BusinessPage from "./containers/BusinessPage";
import EntertainmentPage from "./containers/EntertainmentPage";
import HealthPage from "./containers/HealthPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="entertainment" element={<EntertainmentPage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="detail/:publishedAt" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
