import styled from '@emotion/styled';
import React, { Dispatch, SetStateAction } from 'react';

import CloseSvg from '@/components/svg/CloseSvg';
import EmailSvg from '@/components/svg/EmailSvg';
import GithubSvg from '@/components/svg/GithubSvg';
import useTrackEvent from '@/hooks/useTrackEvent';

interface Props {
  isOpen: boolean;
  left: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ isOpen, left, setIsOpen }: Props) => {
  const { trackClick } = useTrackEvent();

  const closeSideBar = () => {
    setIsOpen(false);
  };

  // 문의하기
  const inquiry = () => {
    trackClick('Link', 'inquiry');
    window.open(
      'https://docs.google.com/forms/d/1xa0qRIqe1yab4IdsnN6UaAsoM4dyuxpVZmA6wFWnPDg',
      '_blank'
    );
  };

  // 깃허브
  const github = () => {
    trackClick('Link', 'github');
    window.open('https://github.com/ma9pie/frontend-interview', '_blank');
  };

  return (
    <Wrapper>
      {isOpen && <Overlay onClick={closeSideBar}></Overlay>}
      <Content left={left}>
        <Top>
          <CloseSvg width={28} height={28} onClick={closeSideBar}></CloseSvg>
        </Top>

        <ListContainer>
          <List onClick={inquiry}>
            <EmailSvg></EmailSvg>
            <SubText>문의하기</SubText>
          </List>
          <List onClick={github}>
            <GithubSvg></GithubSvg>
            <SubText>Github</SubText>
          </List>
        </ListContainer>
      </Content>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.4);
`;
const Content = styled.div<{ left: string }>`
  position: absolute;
  top: 0px;
  left: ${({ left }) => left};
  width: 200px;
  height: 100vh;
  z-index: 3;
  transition: left 0.2s ease-in-out;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0px 20px;
`;
const ListContainer = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0px 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--selected);
  }
  & * {
    background-color: inherit;
  }
`;
const SubText = styled.p``;
