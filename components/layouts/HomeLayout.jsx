import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layouts/Footer";
import Head from "@/components/layouts/Head";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";

function HomeLayout(props) {
  const [left, setLeft] = useState(-200);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    setLeft(isOpenSideBar ? 0 : -200);
  }, [isOpenSideBar]);

  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <Container>
      <Head></Head>
      <Header toggleSideBar={toggleSideBar}></Header>
      <SideBar
        left={`${left}px`}
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      ></SideBar>
      <Body>
        <ScrollBar height="calc(var(--vh) - 100px)">{props.children}</ScrollBar>
      </Body>
      <Footer></Footer>
    </Container>
  );
}

export default HomeLayout;

const Container = styled.div`
  position: relative;
`;
const Body = styled.div`
  min-height: calc(var(--vh) - 100px);
`;
