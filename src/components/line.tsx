import styled from "styled-components";

/**
 * 
 * @param width 길이
 * @param dir 방향 (column: 가로, row: 세로)
 * @param color 색상
 * @param position 뭘까 
 * @returns 
 */
export const Line = ({ width, dir, color, position }: LineStyleProps) => {
  return (
    <LineStyle width={width} dir={dir} color={color} position={position} />
  );
};

const LineStyle = styled.div<LineStyleProps>`
  flex-direction: ${(dir) => `${dir.dir}`};
  width: ${(props) => {
    return props.dir === "column" ? `${props.width}vw` : `0.1vw`;
  }};
  height: ${(props) => {
    return props.dir === "column" ? `0.1vw` : `${props.width}vh`;
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
  position: "static" | "absolute" | "fixed" | "relative" | "sticky";
}

/**
 * 
  width: 72vw;
  height: 0.2vh;
  border-radius: 8px;
  background-color: #396b76;
 */
