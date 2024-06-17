import { useRef, useState } from "react";
import styled from "styled-components";
import { Line } from "../../components/line";
import { CommonImages } from "../../assets/common";

export default function Home() {
  const [email, setEmail] = useState("iixiixanx@gmail.com");
  const accounts = [
    { id: 1, accountFrom: "Github", accountName: "iixax" },
    { id: 2, accountFrom: "Naver", accountName: "unh1107" },
    { id: 3, accountFrom: "Google", accountName: "iixiixanx" },
    { id: 4, accountFrom: "Github", accountName: "iixax" },
    { id: 5, accountFrom: "Naver", accountName: "unh1107" },
    { id: 6, accountFrom: "Google", accountName: "iixiixanx" },
    { id: 7, accountFrom: "Github", accountName: "iixax" },
    { id: 8, accountFrom: "Naver", accountName: "unh1107" },
    { id: 9, accountFrom: "Google", accountName: "iixiixanx" },
  ];
  const accountId = useRef(0);

  return (
    <Wrapper>
      <Menu>
        <BtnWrapper src={CommonImages.Menu_Icon}/>
      </Menu>
      <HeaderWrapper>
        <H1Wrapper color="396B76">Now you're sign in with</H1Wrapper>
        <H1Wrapper color="fff">{email}</H1Wrapper>
      </HeaderWrapper>
      <Line dir="column" width={100} color="fff" position="static" />
      <ListWrapper>
        {accounts.map((acc) => (
          <ListComponent
            key={acc.id}
            accountFrom={acc.accountFrom}
            accountName={acc.accountName}
          />
        ))}
      </ListWrapper>
      <Line dir="column" width={100} color="fff" position="static" />
    </Wrapper>
  );
}

const ListComponent = ({ ...props }: ListInterface) => {
  return (
    <ListDivWrapper>
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

interface ListInterface {
  accountFrom: string;
  accountName: string;
}

const ListDivWrapper = styled.div`
  border-top: 0.1vh;
  border-bottom: 0.1vh;
  width: 100vw;
  height: 10.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperWithOutLine = styled.div`
  flex-direction: row;
  display: flex;
  align-items: left;
  padding-top: 2vh;
  padding-bottom: 2vh;
`

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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1a1d1e;
  justify-content: center;
  align-items: left;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  align-items: left;
  width: 100vw;
  height: 4vh;
  margin-bottom: 4vh;
`;

const BtnWrapper = styled.img`
  margin-left: 8vw;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 4vh;
`;

const H1Wrapper = styled.h1<{ color: string }>`
  color: ${(color) => `#${color.color}`};
  font-weight: 600;
  font-size: 2ch;
  margin-bottom: 1vh;
  margin-left: 8vw;
  text-overflow: clip;
`;

const ListWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  height: 62vh;
  width: 100vw;
  overflow: auto;
`;
