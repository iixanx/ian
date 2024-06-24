import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Line } from "../../components/line";
import { CommonImages } from "../../assets/common";
import { authenticator } from "otplib";
import axios from "axios";
import { BASE_URL } from "../..";

type OtpModalprop = {
  closeModal?: () => void;
};

export default function OtpModal({ closeModal }: OtpModalprop) {
  const [serviceName, setServiceName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [otp, setOtp] = useState("");

  let data: any;

  useEffect(() => {
    axios.get(`${BASE_URL}/otp/otp?id=${1}`).then((res) => {
      data = res.data.data;

      setServiceName(data.service);
      setAccountName(data.account);
    });
  });

  // useEffect(() => {
  //   setOtp(authenticator.generate(data.secret));
  // }, [otp]);

  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer>
        <Modal>
          <ServiceImg></ServiceImg>
          <ServiceNameWrapper>{serviceName}</ServiceNameWrapper>
          <AccountNameWrapper>{accountName}</AccountNameWrapper>
          <GetOtpNumber>
            <TimerWrapper src={CommonImages.Menu_Icon} />
            <OtpNumber>{otp}</OtpNumber>
          </GetOtpNumber>
          <Line width={48} dir={"column"} color={"fff"} position={"static"} />
          <CloseBtn onClick={closeModal}>닫기</CloseBtn>
        </Modal>
      </ModalContainer>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ModalContainer = styled.div`
  position: absolute;
  background: #1a1d1e 0.5;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  left: 2rem;
  top: 30rem;
  display: flex;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Modal = styled.div`
  background-color: #202426;
  width: 64vw;
  height: 42vh;
  border-radius: 8px;
  border: solid 0.1px #fff;
  left: 8vw;
  bottom: 2vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh;
  padding-top: 4vh;
  justify-content: space-between;
`;

const ServiceImg = styled.img`
  border-radius: 128px;
  width: 64px;
  height: 64px;
  background-color: aliceblue;
`;

const ServiceNameWrapper = styled.h2`
  font-size: 1ch;
  font-weight: 200;
  color: #fff;
`;

const AccountNameWrapper = styled.h2`
  font-size: 2cqb;
  font-weight: 400;
  color: #fff;
`;

const GetOtpNumber = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64vw;
`;

const TimerWrapper = styled.img`
  display: flex;
  align-items: center;
  padding: 2vh;
`;

const OtpNumber = styled.h1`
  font-size: 4ch;
  font-weight: 400;
  color: #fff;
`;

const CloseBtn = styled.button`
  width: 64vw;
  height: 4vh;
  /* background-color: #b8b8b8; */
  color: #fff;
`;
