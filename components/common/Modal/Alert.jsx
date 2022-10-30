import styled from "@emotion/styled";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

function AlertModal(props) {
  const unixTime = parseInt(new Date().getTime() / 1000);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      zIndex: unixTime,
    },
    content: {
      top: props.top,
      left: props.left,
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%,-50%)",
      border: "1px solid var(--divider)",
      borderRadius: "15px",
      backgroundColor: "var(--bg)",
      margin: props.margin,
      padding: props.padding,
      minWidth: props.minWidth,
      boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.3)",
      zIndex: unixTime,
    },
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const onKeyDown = (e) => {
    if (e.key === "Enter" && props.isOpen) {
      props.onRequestClose();
      props.onAfterClose();
    }
  };

  ReactModal.setAppElement("#alert-modal");
  return (
    <ReactModal
      contentLabel="AlertModal"
      style={customStyles}
      closeTimeoutMS={200}
      isOpen={props.isOpen}
      onAfterOpen={() => props.onAfterOpen()}
      onAfterClose={() => props.onAfterClose()}
      onRequestClose={() => props.onRequestClose()}
    >
      <Top>
        <Title> {props.title}</Title>
      </Top>
      <ContentBox>
        {props.component()}
        {props.message
          .toString()
          .split("\n")
          .map((text, idx) => {
            if (text) return <Text key={idx}>{text}</Text>;
          })}
      </ContentBox>

      <ButtonBox>
        <Button onClick={() => props.onRequestClose()}>확인</Button>
      </ButtonBox>
    </ReactModal>
  );
}

export default React.memo(AlertModal);

AlertModal.defaultProps = {
  isOpen: false, // 모달을 열고 닫는 변수
  top: "50%", // 모달 top 위치
  left: "50%", // 모달 left 위치
  padding: "24px ", // 모달 패딩
  minWidth: "320px", // 최소 너비
  title: "알림", // 상단 타이틀
  message: "alert message", // 표시 메시지
  confirmBtnText: "확인", // 버튼 텍스트
  component: () => {}, // 모달에 전달할 컴포넌트
  onAfterOpen: () => {}, // 모달이 열린 후 실행 함수
  onAfterClose: () => {}, // 모달이 닫힌 후 실행 함수
  onRequestClose: () => {}, // 모달 닫기 실행 함수
};

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  white-space: nowrap;
  margin-bottom: 24px;
`;

const ContentBox = styled.div`
  text-align: center;
`;

const Text = styled.p`
  height: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  background-color: var(--button);
  & * {
    background: transparent;
  }
  cursor: pointer;
`;
