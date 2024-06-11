import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Line } from "../../components/line";

export default function Signup() {
  let [step, setStep] = useState(0);

  function clickHandler() {
    if (step < 4) setStep(step + 1);
    else if (step == 4) window.location.href = "/signin";
  }

  return (
    <Wrapper>
      <DivWrapper>
        {step == 4 ? (
          <SignUp5 />
        ) : (
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
                <Line width={72} dir="column" color="fff" position="absoulte" />
              </Bar>
            </Header>
          </Container>
        )}
        {step == 0 ? (
          <SignUp1 />
        ) : step == 1 ? (
          <SignUp2 />
        ) : step == 2 ? (
          <SignUp3 />
        ) : step == 3 ? (
          <SignUp4 />
        ) : (
          <div></div>
        )}
        <Submit>
          <Button
            text={step < 3 ? "Next" : step == 3 ? "Submit" : "Confirm"}
            size={72}
            onClick={clickHandler}
            color={step == 4 ? "396B76" : undefined}
            fontColor={step == 4 ? "fff" : undefined}
          ></Button>
          {step < 4 ? (
            <Description href="/signin">Already have an account?</Description>
          ) : (
            <div></div>
          )}
        </Submit>
      </DivWrapper>
    </Wrapper>
  );
}

const SignUp1 = () => {
  return <Input label="Name" />;
};

const SignUp2 = () => {
  return (
    <div>
      <Input label="Account" />
      <Input label="Email" />
    </div>
  );
};

const SignUp3 = () => {
  return <Input label="Authorize Number" />;
};

const SignUp4 = () => {
  return (
    <div>
      <Input label="Password" />
      <Input label="Password Confirm" />
    </div>
  );
};

const SignUp5 = () => {
  return (
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
  );
};

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
