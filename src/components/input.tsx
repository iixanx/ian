import styled from "styled-components";

export const Input = ({ label, ...props }: { label: string }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Form
        placeholder={`Please enter the ${label.toLowerCase()}`}
        {...props}
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
  justify-content: left;
  flex-direction: column;
  display: flex;
  color: #fff;
  margin-bottom: 1vh;
`;

const Form = styled.input`
  color: #b8b8b8;
  width: 72vw;
  height: 5vh;
  border-radius: 8px;
  padding: 4%;
`;
