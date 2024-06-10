import { redirect } from "react-router-dom";
import styled from "styled-components";

export const Button = ({
  text,
  size,
  url,
}: {
  text: string;
  size: number;
  url: string;
}) => {
  return (
    <ButtonCss size={size} onClick={() => window.location.replace(url)}>
      {text}
    </ButtonCss>
  );
};

const ButtonCss = styled.button<{ size: number }>`
  width: ${(size) => `${size.size}vw`};
  height: 5vh;
  text-align: center;
  background-color: #396b76;
  color: #fff;
  border-radius: 8px;
  margin-top: 5vh;
`;
