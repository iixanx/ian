import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Line } from "../../components/line";
import { CommonImages } from "../../assets/common";
import { ListComponent } from "./list";
import OtpModal from "./otp";
import useOpenModal from "../../hooks/useOpenModal";
import axios from "axios";
import { BASE_URL } from "../..";
import { getCookie } from "../../common/cookie";
import { Cookies } from "react-cookie";

export default function Home() {
  const cookie = new Cookies();

  const { isOpenModal, clickModal, closeModal } = useOpenModal();

  const [email, setEmail] = useState("");
  let accounts: any[] = [];

  useEffect(() => {
    axios
      .get(`${BASE_URL}/otp`, {
        headers: {
          authorization: cookie.get("user"),
        },
      })
      .then((res) => {
        accounts = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return (
    <>
      <Wrapper>
        <Menu>
          <BtnWrapper src={CommonImages.Menu_Icon} />
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
              onClick={() => {
                clickModal();
              }}
            />
          ))}
        </ListWrapper>
        <Line dir="column" width={100} color="fff" position="static" />
      </Wrapper>
      {isOpenModal && <OtpModal closeModal={closeModal} />}
    </>
  );
}

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
