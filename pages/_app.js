import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import "@/styles/reset.scss";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Overlay>
      <Content>{getLayout(<Component {...pageProps} />)}</Content>
    </Overlay>
  );
}

export default App;

const Overlay = styled.div`
  background-color: var(--overlay);
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0px auto;
`;
