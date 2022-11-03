import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  const [innerHeight, setinnerHeight] = useState(1000);

  useEffect(() => {
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  });

  const setHeight = () => {
    setinnerHeight(window.innerHeight);
  };

  return (
    <Container>
      <Head></Head>
      <Header></Header>
      <Body>
        <ScrollBar maxHeight={`${innerHeight - 100}px`}>
          {props.children}
        </ScrollBar>
      </Body>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  position: relative;
`;
const Body = styled.div`
  min-height: calc(100vh - 100px);
`;
