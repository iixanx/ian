import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({
  label,
  type = "text",
  autoComplete = "off",
  onChange,
  name,
  value
}: InputType) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper
        onChange={onChange}
        name={name}
        value={value}
        placeholder={`Please enter the ${label.toLowerCase()}`}
        type={type}
        autoComplete={autoComplete}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  flex-direction: column;
  display: flex;
  margin-bottom: 2vh;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 4vw;
  justify-content: left;
  flex-direction: column;
  display: flex;
  color: #fff;
  margin-bottom: 1vh;
`;

const InputWrapper = styled.input<{ type: string }>`
  width: 72vw;
  height: 5vh;
  border-style: none;
  border-radius: 8px;
  padding: 4%;
  font-size: 4vw;
`;
