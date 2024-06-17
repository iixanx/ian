import styled from "styled-components";

export const Button = ({
  text,
  size,
  onClick,
  color,
  fontColor
}: {
  text: string;
  size: number;
  onClick: Function;
  fontColor?: string;
  color?: string;
}) => {
  return (
    <ButtonWrapper
      size={size}
      onClick={() => {
        onClick();
      }}
      color={color}
      fontColor={fontColor ?? "FFF"}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{
  size: number;
  color?: string;
  fontColor?: string;
}>`
  width: ${(size) => `${size.size}vw`};
  height: 5vh;
  text-align: center;
  background-color: ${(color) =>
    `#${typeof color.color == "undefined" ? "1A1D1E" : color.color}`};
  color: ${(fontColor) =>
    `#${typeof fontColor.fontColor == undefined ? "396b76" : fontColor.fontColor}`};
  border-radius: 8px;
  margin-top: 5vh;
`;
