import styled from "@emotion/styled";
import React from "react";
import ThemeToggle from "@/components/common/ThemeToggle";
import ListSvg from "@/svg/ListSvg";

function Header() {
  return (
    <Wrapper>
      {/* <ListSvg></ListSvg> */}
      <Title>💻 프론트엔드 면접 질문</Title>
      <ThemeToggle></ThemeToggle>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 20px;
  background: linear-gradient(-45deg, #ef32d9, #89fffd);
  & * {
    background: transparent;
  }
`;

const Title = styled.h1`
  font-size: var(--4xl);
  font-weight: 700;
  color: black;
`;
