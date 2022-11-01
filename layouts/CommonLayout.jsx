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
      <ScrollBar height="calc(100vh - 60px)">
        <Body>{props.children}</Body>
        <Test></Test>
        <Footer></Footer>
      </ScrollBar>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  height: 100%;
`;
const Body = styled.div`
  min-height: calc(100vh - 100px);
`;
const Test = styled.div``;
