import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export default function Signin() {
  // TODO: line 15 => 비밀번호 입력이 보이지 않도록 & type == password일 경우 오른쪽에 visible icon 추가, 클릭 시마다 상태 변화
  // TODO: Description의 텍스트가 보이지 않음
  return (
    <Wrapper>
      <Container>
        <Header>
          <H1>Sign In</H1>
          <Line percent={0.25} />
        </Header>
        <Form>
          <Input label="Account" />
          <Input label="Password" />
        </Form>
        <Submit>
          <Button text="sign in" size={72} url="main" />
          <Description
            text="Don't have an account?"
            href={`${process.env.BASE_URL}/signup`}
          />
        </Submit>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 24vh;
  padding-bottom: 32vh;
  background-color: #202426;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 72vw;
  height: 72vh;
  flex-direction: column;
  display: flex;
  justify-content: left;
  align-items: start;
`;

const Form = styled.div`
  justify-content: left;
`;

const Header = styled.div`
  justify-content: left;
  margin-bottom: 4vh;
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 4ch;
`;

const Line = styled.div<{ percent: number }>`
  width: 72vw;
  height: 0.2vh;
  border-radius: 8px;
  background-color: #396b76;
`;

const Submit = styled.div`
  flex-direction: column;
  display: flex;
  width: 75vw;
  height: 16vh;
`;

const Description = styled.a<{ text: string }>`
  width: 72vw;
  height: 4vh;
  font-size: 0.5ch;
  font-weight: 100;
  text-align: center;
  color: #fff;
  margin-top: 2vh;
`;
