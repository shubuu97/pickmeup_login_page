import React from "react";
import { Container, Heading, LoginButtonContainer } from "./styles";
import TextInputStyled from "../../widget/textInput";
import { Button } from "react-native";

const login = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <Container>
      <Heading>PICK ME UP</Heading>
      <TextInputStyled
        placeholder="john@doe.com"
        name="email"
        label="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextInputStyled
        secureTextEntry
        placeholder="Enter your password"
        name="password"
        label="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <LoginButtonContainer>
        <Button title="LOGIN" color="#e4405f" />
      </LoginButtonContainer>
    </Container>
  );
};

export default login;
