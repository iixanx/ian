import styled from "styled-components";
import { Line } from "../../components/line";

interface ListInterface {
  accountFrom: string;
  accountName: string;
  onClick: () => void;
}

export const ListComponent = ({ ...props }: ListInterface) => {
  return (
    <ListDivWrapper onClick={props.onClick}>
      <Line width={85} dir={"column"} color={"B8B8B8"} position={"static"} />
      <WrapperWithOutLine>
        <ListImgWrapper></ListImgWrapper>
        <ListHeaderWrapper>
          <ListH2Wrapper>{props.accountFrom}</ListH2Wrapper>
          <ListH1Wrapper>{props.accountName}</ListH1Wrapper>
        </ListHeaderWrapper>
      </WrapperWithOutLine>
      <Line width={85} dir={"column"} color={"B8B8B8"} position={"static"} />
    </ListDivWrapper>
  );
};
const ListDivWrapper = styled.div`
  border-top: 0.1vh;
  border-bottom: 0.1vh;
  width: 100vw;
  height: 10.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const WrapperWithOutLine = styled.div`
  flex-direction: row;
  display: flex;
  align-items: left;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

const ListImgWrapper = styled.div`
  background-color: #fff;
  border-radius: 128px;
  width: 12vw;
  height: 6vh;
  /* margin-left: 4vh; */
  margin-right: 2.4vh;
`;

const ListHeaderWrapper = styled.div`
  flex-direction: column;
  display: flex;
  padding-left: 4vw;
`;

const ListH2Wrapper = styled.h2`
  color: #fff;
  font-weight: 300;
  font-size: 1.2ch;
  margin-bottom: 1.6vh;
`;

const ListH1Wrapper = styled.h1`
  color: #fff;
  font-weight: 400;
  font-size: 3.2vh;
  min-width: 50vw;
  max-width: 75vw;
`;
