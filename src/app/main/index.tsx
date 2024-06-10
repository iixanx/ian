import styled from "styled-components";
import { CommonImages } from "../../assets/common";

export default function MainApp() {
  return (
    <Wrapper>
      <Container>
        <Image src={CommonImages.IAN_Logo}></Image>
        <Button>Get Start</Button>
      </Container>
      <Copyright>2024@Copyright IAN.co</Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1a1d1e;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
`;

const Container = styled.div`
  width: 60%;
  height: 85%;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1``;

const Button = styled.button`
  width: 30vw;
  height: 5vh;
  text-align: center;
  background-color: #396b76;
  color: #fff;
  border-radius: 8px;
  margin: 5vh;
`;

const Image = styled.img``;

const Copyright = styled.p`
  font-weight: 100;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
