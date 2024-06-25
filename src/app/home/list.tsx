import styled from "styled-components";
import { Line } from "../../components/line";
import axios from "axios";
import { BASE_URL } from "../..";
import { Account } from "./home";
import { CommonImages } from "../../assets/common";

interface ListInterface {
  otpId: number;
  accountFrom: string;
  accountName: string;
  onClick: () => void;
  postData: React.Dispatch<React.SetStateAction<Account[]>>;
}

export const ListComponent = ({ ...props }: ListInterface) => {
  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/otp`, {
        headers: {
          authorization: localStorage.getItem("user"),
        },
        data: {
          otpId: props.otpId,
        },
      })
      .then((res) => {
        axios
          .get(`${BASE_URL}/otp`, {
            headers: {
              authorization: localStorage.getItem("user"),
            },
          })
          .then((res) => {
            props.postData(res.data.data.accountList);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <ListDivWrapper>
      <Line width={85} dir={"column"} color={"B8B8B8"} position={"static"} />
      <RowWrapper>
        <WrapperWithOutLine onClick={props.onClick}>
          <ListImgWrapper></ListImgWrapper>
          <ListHeaderWrapper>
            <ListH2Wrapper>{props.accountFrom}</ListH2Wrapper>
            <ListH1Wrapper>{props.accountName}</ListH1Wrapper>
          </ListHeaderWrapper>
        </WrapperWithOutLine>
        <DeleteWrapper onClick={handleDelete}>
          <DeleteImg src={CommonImages.Trash}/>
        </DeleteWrapper>
      </RowWrapper>
      <Line width={85} dir={"column"} color={"B8B8B8"} position={"static"} />
    </ListDivWrapper>
  );
};

const DeleteImg = styled.img`
  width: 4vw;

`

const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const DeleteWrapper = styled.div`
  margin-left: 8vw;
  width: 20vw;
  height: auto;
  /* background-color: #fff; */
`;

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
  width: 36vw;
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
