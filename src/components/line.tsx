import styled from "styled-components";

export const Line = ({ width, dir, color, position }: LineStyleProps) => {
  return (
    <LineStyle width={width} dir={dir} color={color} position={position} />
  );
};

const LineStyle = styled.div<LineStyleProps>`
  flex-direction: ${(dir) => `${dir.dir}`};
  width: ${(props) => {
    return props.dir == "column" ? `${props.width}vw` : `0.2vh`;
  }};
  height: ${(props) => {
    return props.dir == "column" ? `0.2vh` : `${props.width}vh`;
  }};
  background-color: ${(color) => `#${color.color}`};
  border-radius: 8px;
  border-color: #bbb;
  border-top-width: 1vh;
  position: ${(position) => `${position.position}`};
`;

interface LineStyleProps {
  width: number;
  dir: "column" | "row";
  color: string;
  position: string;
}

/**
 * 
  width: 72vw;
  height: 0.2vh;
  border-radius: 8px;
  background-color: #396b76;
 */
