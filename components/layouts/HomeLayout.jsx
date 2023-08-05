import useTrackEvent from "@/hooks/useTrackEvent";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layouts/Footer";
import Head from "@/components/layouts/Head";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";

function HomeLayout({ children }) {
  const { trackClick } = useTrackEvent();

  const [left, setLeft] = useState(-200);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLeft(isOpen ? 0 : -200);
  }, [isOpen]);

  const handleClickMemu = () => {
    const _isOpen = !isOpen;
    trackClick("Icon", "menu");
    setIsOpen(_isOpen);
  };

  return (
    <Container>
      <Head></Head>
      <Header onClickMenu={handleClickMemu}></Header>
      <SideBar
        left={`${left}px`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></SideBar>
      <Body>
        <ScrollBar height="calc(var(--vh) - 100px)">{children}</ScrollBar>
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
