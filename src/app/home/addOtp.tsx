import styled from "styled-components";
import { Line } from "../../components/line";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../..";

type OtpModalprop = {
  closeModal: () => void;
};

export default function AddOtpModal({ closeModal }: OtpModalprop) {
  const { form, handleChange } = useForm({
    service: "",
    account: "",
  });
  const { service, account } = form;

  const handleCheck = () => {
    axios
      .post(
        `${BASE_URL}/otp`,
        {
          service: service,
          account: account,
        },
        {
          headers: {
            authorization: window.sessionStorage.getItem("user"),
          },
        }
      )
      .then((res) => {
        console.log(service, account);
      })
      .catch((e) => {
        console.log(service, account);
        console.error(e);
      });
    closeModal();
  };

  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer>
        <Modal>
          <H1DivWrapper>
            <H1Wrapper>
              Add your
              <br />
              account
            </H1Wrapper>
          </H1DivWrapper>
          <InputSetWrapper>
            <LabelInputWrapper>
              <LabelWrapper>Service</LabelWrapper>
              <InputWrapper
                name="service"
                value={service}
                onChange={handleChange}
              />
            </LabelInputWrapper>
            <LabelInputWrapper>
              <LabelWrapper>Account</LabelWrapper>
              <InputWrapper
                name="account"
                value={account}
                onChange={handleChange}
              />
            </LabelInputWrapper>
          </InputSetWrapper>
          <LineBtnWrapper>
            <Line width={56} dir={"column"} color={"fff"} position={"static"} />
            <BtnWrapper>
              <CloseBtn onClick={handleCheck}>확인</CloseBtn>
              <CloseBtn onClick={closeModal}>닫기</CloseBtn>
            </BtnWrapper>
          </LineBtnWrapper>
        </Modal>
      </ModalContainer>
    </ModalWrap>
  );
}

const H1DivWrapper = styled.div`
  width: 48vw;
  align-items: left;
`;

const LineBtnWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1Wrapper = styled.h1`
  color: #fff;
  font-size: 2.5ch;
  font-weight: 600;
`;

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
  padding: 1vh;
  padding-top: 4vh;
  justify-content: space-between;
`;

const InputSetWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64vw;
`;

const BtnWrapper = styled.button`
  flex-direction: row;
  display: flex;
  margin-top: 1vh;
`;

const CloseBtn = styled.button`
  width: 32vw;
  height: 4vh;
  color: #fff;
`;

const LabelInputWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 48vw;
  height: 8vh;
  justify-content: stretch;
  margin: 0 auto;
`;

const LabelWrapper = styled.p`
  font-size: 300;
  font-weight: 300;
  color: #fff;
`;

const InputWrapper = styled.input`
  width: 48vw;
  color: #fff;
  margin-top: 1vh;
  background-color: transparent;
  border-width: 0 0 1px;
  outline: none;
`;
