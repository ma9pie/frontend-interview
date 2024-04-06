import styled from '@emotion/styled';
import React from 'react';

import ThemeToggle from '@/components/common/ThemeToggle';
import ListSvg from '@/components/svg/ListSvg';

interface Props {
  onClickMenu: () => void;
}

const Header = ({ onClickMenu }: Props) => {
  return (
    <Wrapper>
      <Icon onClick={onClickMenu}>
        <ListSvg></ListSvg>
      </Icon>
      <Title>프론트엔드 면접 질문</Title>
      <ThemeToggle></ThemeToggle>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  background-color: var(--brandColor);
  & * {
    background: transparent;
  }
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
