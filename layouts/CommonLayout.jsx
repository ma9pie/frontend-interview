import styled from "@emotion/styled";
import React from "react";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  return (
    <Container>
      <Head></Head>
      <Header></Header>
      <Body>{props.children}</Body>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div``;
const Body = styled.div`
  height: calc(100vh - 120px);
`;
