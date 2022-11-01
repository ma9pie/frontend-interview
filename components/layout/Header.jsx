import styled from "@emotion/styled";
import React from "react";
import ThemeToggle from "@/components/common/ThemeToggle";
import ModalUtils from "@/utils/ModalUtils";
import ListSvg from "@/svg/ListSvg";

function Header(props) {
  return (
    <Wrapper>
      <Icon
        onClick={() =>
          ModalUtils.openAlert({ message: "사이드 메뉴 개발 예정" })
        }
      >
        <ListSvg></ListSvg>
      </Icon>
      <Title>프론트엔드 면접 질문</Title>
      <ThemeToggle></ThemeToggle>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 20px;
  background: linear-gradient(-45deg, #ef32d9, #89fffd);
  & * {
    background: transparent;
  }
  z-index: 2;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: var(--xl);
  font-weight: 700;
  line-height: 30px;
  color: black;
`;
