import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import "@/styles/reset.scss";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import "@/styles/simplebar.scss";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateViewHeight);
    return () => {
      window.removeEventListener("resize", updateViewHeight);
    };
  }, []);

  const updateViewHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // setViewHeight(`${vh}px`);
  };

  return (
    <Overlay>
      <Content>{getLayout(<Component {...pageProps} />)}</Content>
    </Overlay>
  );
}

export default App;

const Overlay = styled.div`
  background-color: var(--overlay);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;
