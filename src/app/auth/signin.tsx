import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../..";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { setCookie } from "../../common/cookie";

export default function Signin() {
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const [info, setInfo] = useState("");

  const nav = useNavigate();

  const inputHandler = async () => {
    if (email.length < 1 || password.length < 1) {
      setInfo("Input length must be more than 1 characters");
    } else {
      axios
        .post(`${BASE_URL}/auth/signin`, {
          email: email,
          password: password,
        })
        .then(async (res) => {
          await setCookie(res);
          console.log(localStorage.getItem("user"))
          return nav("/home");
        })
        .catch((e) => {
          console.error(e);
        });
      setInfo("");
      nav("/home");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <H1>Sign In</H1>
          <Line />
        </Header>
        <Form>
          <Input
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />
        </Form>
        <Inform>{info}</Inform>
        <Submit>
          <Button text="sign in" size={72} onClick={inputHandler} />
          <Description onClick={() => nav("/signup")}>
            Don't have an account?
          </Description>
        </Submit>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 24vh;
  padding-bottom: 32vh;
  background-color: #202426;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 72vw;
  height: 72vh;
  flex-direction: column;
  display: flex;
  justify-content: left;
  align-items: start;
`;

const Form = styled.div`
  justify-content: left;
`;

const Header = styled.div`
  justify-content: left;
  margin-bottom: 4vh;
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 4ch;
`;

const Line = styled.div`
  width: 72vw;
  height: 0.2vh;
  border-radius: 8px;
  background-color: #396b76;
`;

const Submit = styled.div`
  flex-direction: column;
  display: flex;
  width: 75vw;
  height: 16vh;
`;

const Description = styled.a`
  margin-top: 2vh;
  font-weight: 100;
  font-size: 0.5ch;
  text-align: center;
  color: #fff;
`;

const Inform = styled.p`
  display: ${(info) => (info ? "block" : "none")};
  color: #ff0000;
  font-size: 300;
`;
