import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Line } from "../../components/line";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../..";

export default function Signup() {
  let [step, setStep] = useState(0);
  let [info, setInfo] = useState("");
  const nav = useNavigate();

  const { form, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const { name, email, password, password_confirm } = form;

  function clickHandler() {
    setInfo("");
    axios
      .post(`${BASE_URL}/auth/signup`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
    nav("/signin");
  }

  function nameHandler() {
    if (name.length < 1) {
      setInfo("Name must to be required");
    } else {
      setInfo("");
      setStep(step + 1);
    }
  }

  function emailHandler() {
    if (!email.match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      setInfo("Email is not valid");
    } else {
      setInfo("");
      setStep(step + 1);
    }
  }

  const passwordHandler = () => {
    if (password !== password_confirm) setInfo("Entered the wrong password");
    else setStep(step + 1);
  };

  return (
    <Wrapper>
      <DivWrapper>
        <Container>
          <Header>
            <H1Wrapper>Sign Up</H1Wrapper>
            <Bar>
              <Line
                width={step < 5 ? 18 * step : 72}
                dir="column"
                color="396B76"
                position="absolute"
              />
              <Line width={72} dir="column" color="fff" position="absolute" />
            </Bar>
          </Header>
        </Container>
        <SignUp1Wrapper step={step}>
          <Input
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Submit>
            <Button
              text={"Next"}
              size={72}
              onClick={nameHandler}
              color={"396B76"}
              fontColor={"fff"}
            />
            <Inform>{info}</Inform>
            <Description
              onClick={() => {
                setInfo("");
                nav("/signin");
              }}
            >
              Already have an account?
            </Description>
          </Submit>
        </SignUp1Wrapper>
        <SignUp2Wrapper step={step}>
          <Input
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Inform>{info}</Inform>
          <Submit>
            <Button
              text={"Next"}
              size={72}
              onClick={emailHandler}
              color={"396B76"}
              fontColor={"fff"}
            />
            <Description onClick={() => nav("/signin")}>
              Already have an account?
            </Description>
          </Submit>
        </SignUp2Wrapper>
        <SignUp3Wrapper step={step}>
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Input
            label="Password Confirm"
            type="password"
            name="password_confirm"
            value={password_confirm}
            onChange={handleChange}
          />
          <Inform>{info}</Inform>
          <Submit>
            <Button
              text={"Submit"}
              size={72}
              onClick={passwordHandler}
              color={"396B76"}
              fontColor={"fff"}
            />
            <Description onClick={() => nav("/signin")}>
              Already have an account?
            </Description>
          </Submit>
        </SignUp3Wrapper>
        <SignUp4Wrapper step={step}>
          <AfterWrapper>
            Congratuation! <br />
            <br />
            Now you
            <br />
            can access
            <br />
            our contents
            <br />
            after you sign in.
          </AfterWrapper>
          <Submit>
            <Button
              text={"Confirm"}
              size={72}
              onClick={clickHandler}
              color={"396B76"}
              fontColor={"fff"}
            />
            <div></div>
          </Submit>
        </SignUp4Wrapper>
      </DivWrapper>
    </Wrapper>
  );
}

const SignUp1Wrapper = styled.div<{ step: number }>`
  display: ${(step) => (step.step === 0 ? "block" : "none")};
`;

const SignUp2Wrapper = styled.div<{ step: number }>`
  display: ${(step) => (step.step === 1 ? "block" : "none")};
`;

const SignUp3Wrapper = styled.div<{ step: number }>`
  display: ${(step) => (step.step === 2 ? "block" : "none")};
`;

const SignUp4Wrapper = styled.div<{ step: number }>`
  display: ${(step) => (step.step === 3 ? "block" : "none")};
`;

const Inform = styled.p`
  display: ${(info) => (info ? "block" : "none")};
  color: #ff0000;
  font-size: 300;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202426;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
`;

const DivWrapper = styled.div`
  margin-top: 24vh;
`;

const Container = styled.div``;

const Header = styled.div`
  margin-bottom: 4vh;
`;

const H1Wrapper = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 4ch;
  position: relative;
  z-index: 1;
`;

const Bar = styled.div`
  width: 72vw;
  height: 0.2vh;
  justify-content: left;
  display: contents;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Submit = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Description = styled.a`
  margin-top: 2vh;
  font-weight: 100;
  font-size: 0.5ch;
  text-align: center;
  color: #fff;
`;

const AfterWrapper = styled.h1`
  font-weight: 700;
  font-size: 150%;
  text-align: left;
  color: #fff;
  margin-top: 8vh;
  margin-bottom: 8vh;
`;
