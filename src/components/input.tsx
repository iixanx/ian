import styled from "styled-components";

export const Input = ({ label, ...props }: { label: string, type?: string }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper
        placeholder={`Please enter the ${label.toLowerCase()}`}
        type={props.type ?? 'text'}
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

const InputWrapper = styled.input<{type: string}>`
  width: 72vw;
  height: 5vh;
  border-style: none;
  border-radius: 8px;
  padding: 4%;
  font-size: 4vw;
`;
