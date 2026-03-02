import React from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Unauthorised from "../components/404 & Auth/Unauthorised";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Unauthorised />
      <Footer />
    </>
  );
};

export default LoginPage;
