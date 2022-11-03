import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import "@/styles/reset.scss";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import "@/styles/simplebar.scss";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const setHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", `${window.innerHeight}px`);
  };

  useEffect(() => {
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  });

  return (
    <Overlay>
      <Content>{getLayout(<Component {...pageProps} />)}</Content>
    </Overlay>
  );
}

export default App;

const Overlay = styled.div`
  background-color: var(--overlay);
  height: 100%;
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;
