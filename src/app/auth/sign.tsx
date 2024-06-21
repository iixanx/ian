import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import styled from "styled-components";

export default function SignUp() {
  let [step, setStep] = useState(0);
  const nav = useNavigate();

  const { form, handleChange } = useForm({
    name: "",
    account: "",
    email: "",
    password: "",
  });
  const { name, account, email, password } = form;

  return (
    <>
      <Wrapper>
        <StepWrapper1 step={step}>
          1
          <button
            onClick={() => {
              setStep(step++);
            }}
          >
            다음
          </button>
        </StepWrapper1>
        <StepWrapper2 step={step}>2</StepWrapper2>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202426;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
`;

const StepWrapper1 = styled.div<{
  step: number;
}>`
  color: white;
  display: ${(step) => (step.step == 0 ? "block" : "none")};
`;

const StepWrapper2 = styled.div<{
  step: number;
}>`
  color: white;
  display: ${(step) => (step.step == 1 ? "block" : "none")};
`;
