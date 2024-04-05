import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useState } from 'react';

import Footer from '@/components/layouts/Footer';
import Head from '@/components/layouts/Head';
import Header from '@/components/layouts/Header';
import SideBar from '@/components/layouts/SideBar';
import useTrackEvent from '@/hooks/useTrackEvent';

interface Props {
  children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  const { trackClick } = useTrackEvent();

  const [left, setLeft] = useState(-200);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLeft(isOpen ? 0 : -200);
  }, [isOpen]);

  const handleClickMemu = () => {
    const _isOpen = !isOpen;
    trackClick('Icon', 'menu');
    setIsOpen(_isOpen);
  };

  return (
    <Container>
      <Head></Head>
      <Header onClickMenu={handleClickMemu}></Header>
      <SideBar
        isOpen={isOpen}
        left={`${left}px`}
        setIsOpen={setIsOpen}
      ></SideBar>
      <Body>{children}</Body>
      <Footer></Footer>
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  position: relative;
`;
const Body = styled.div`
  min-height: calc(100vh - 100px);
`;
