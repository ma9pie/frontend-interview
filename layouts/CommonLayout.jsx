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
        <Footer></Footer>
      </ScrollBar>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  position: relative;
  padding-top: 60px;
`;
const Body = styled.div``;
