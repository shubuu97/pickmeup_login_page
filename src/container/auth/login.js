import React, { useState } from "react";
import LoginView from "../../component/view/auth/login";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    const { value } = event.target;
    setEmail(value);
  };
  const handlePasswordChange = event => {
    const { value } = event.target;
    setPassword(value);
  };
  return (
    <LoginView
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
    />
  );
};

export default login;
