import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

function Alert(props) {
  useEffect(() => {
    props.onAfterOpen();
    return () => props.onAfterClose();
  }, []);

  return (
    <Wrapper>
      <Overlay
        onClick={props.onRequestClose}
        className={props.isOpen ? fadeIn : fadeOut}
      ></Overlay>
      <Container
        top={props.top}
        left={props.left}
        className={props.isOpen ? fadeIn : fadeOut}
      >
        <Top>
          <Title>{props.title}</Title>
        </Top>
        <Content>
          {props.component()}
          {props.message &&
            props.message
              .split("\n")
              .map((text, idx) => <Text key={idx}>{text}</Text>)}
        </Content>
        <ButtonBox>
          <MainButton onClick={props.onRequestClose}>
            {props.confirmBtnText}
          </MainButton>
        </ButtonBox>
      </Container>
    </Wrapper>
  );
}

export default Alert;

Alert.defaultProps = {
  isOpen: false,
  top: "50%",
  left: "50%",
  title: "알림",
  message: "",
  confirmBtnText: "확인",
  component: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestClose: () => {},
};

const fadeIn = css`
  animation: fade-in 0.2s ease-in-out forwards;
`;
const fadeOut = css`
  animation: fade-out 0.2s ease-in-out forwards;
`;
const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--overlay);
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  min-width: 240px;
  gap: 24px;
  border-radius: 15px;
  overflow: hidden;
  background-color: var(--bg);
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const Top = styled.div`
  width: 100%;
  margin-top: 16px;
`;
const Title = styled.p`
  font: var(--headline20);
  text-align: center;
  margin: 0px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 1000px;
  text-align: center;
`;
const Text = styled.p`
  font: var(--body16);
  min-height: 20px;
  margin: 0px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const MainButton = styled.button`
  font: var(--body14);
  width: 100%;
  height: 40px;
  border: 0px;
  color: white;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;
  background-color: var(--brandColor);
  &:hover {
    background-color: var(--pressedMainBtn);
  }
`;
