import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  const ref = useRef(null);

  return (
    <Container>
      <Head></Head>
      <Header></Header>
      <ScrollBar height="calc(100vh - 100px)">
        <Body ref={ref}>{props.children}</Body>
      </ScrollBar>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  position: relative;
  min-height: 100%;
`;
const Body = styled.div``;
