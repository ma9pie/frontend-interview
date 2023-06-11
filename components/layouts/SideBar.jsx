import styled from "@emotion/styled";
import React from "react";
import CloseSvg from "@/svg/CloseSvg";
import EmailSvg from "@/svg/EmailSvg";
import GithubSvg from "@/svg/GithubSvg";

function SideBar(props) {
  const closeSideBar = () => {
    props.setIsOpenSideBar(false);
  };

  // 문의하기
  const inquiry = () => {
    window.open(
      "https://docs.google.com/forms/d/1xa0qRIqe1yab4IdsnN6UaAsoM4dyuxpVZmA6wFWnPDg",
      "_blank"
    );
  };

  // 깃허브
  const github = () => {
    window.open("https://github.com/ma9pie/frontend-interview", "_blank");
  };

  return (
    <Wrapper>
      {props.isOpenSideBar && <Overlay onClick={closeSideBar}></Overlay>}
      <Content left={props.left}>
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
}

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
const Content = styled.div`
  position: absolute;
  top: 0px;
  left: ${(props) => props.left};
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
