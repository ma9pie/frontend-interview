import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  const scrollInto = useRef(null);
  useEffect(() => {
    scrollInto.current.scrollIntoView();
  });
  return (
    <Container ref={scrollInto}>
      <Head></Head>
      <Header></Header>
      <Body>
        <ScrollBar maxHeight="calc(100vh - 100px)">{props.children}</ScrollBar>
      </Body>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div``;
const Body = styled.div`
  min-height: calc(100vh - 100px);
`;
