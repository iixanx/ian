import styled from "styled-components";
import { Line } from "./line";

export const OTP = () => {
  return (
    <Card>
      <Container>
        <Info>
          <Img></Img>
          <Service name="Github" />
          <Account name="iixanx" />
        </Info>
        <OTP_Number />
      </Container>
      <Btn>
        <Line width={50} dir="column" color="fff" position="static"/>
        <Close>닫기</Close>
      </Btn>
    </Card>
  );
};

const Card = styled.div`
  width: 70vw;
  height: 45vh;
  background-color: #202426;
  border-radius: 8px;
  border-color: #b8b8b8;
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 50vw;
  height: 12vh;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

const Info = styled.div`
  width: auto;
  height: auto;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 8vh;
  padding-bottom: 8vh;
`

const Btn = styled.div`
  
`

const Img = styled.div``

const Service = styled.p<{ name: string }>`
  text-align: center;
  font-size: 2ch;
  font-weight: 100;
  width: 12vw;
  height: 4vh;
  color: #b1b1b1;
`;

const Account = styled.p<{ name: string }>`
  text-align: center;
  font-size: 4ch;
  font-weight: 200;
  width: 12vw;
  height: 4vh;
  color: #b1b1b1;
`;

const OTP_Number = styled.h1``;

const Close = styled.button``;
