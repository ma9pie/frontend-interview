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
      <ScrollBar height="calc(100vh - 100px)">
        <Body>{props.children} </Body>
      </ScrollBar>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div``;
const Body = styled.div`
  min-height: calc(100% - 100px);
`;
