import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  return (
    <Container>
      <Head></Head>
      <Header></Header>

      <Body>
        <ScrollBar height="calc(100vh - 100px)">{props.children}</ScrollBar>
      </Body>

      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  position: relative;
  min-height: 100%;
`;
const Body = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
`;
