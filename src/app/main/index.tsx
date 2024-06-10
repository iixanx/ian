import styled from "styled-components";
import { CommonImages } from "../../assets/common";
import { Button } from "../../components/button";

export default function Main() {
  return (
    <Wrapper>
      <Container>
        <Image src={CommonImages.IAN_Logo}></Image>
        <Button text="Get Start" size={50} url="signin" />
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

const Image = styled.img``;

const Copyright = styled.p`
  font-weight: 100;
  font-size: 0.5ch;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
