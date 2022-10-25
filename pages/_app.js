import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import reset from "@/styles/reset";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Overlay>
      <Content>
        <Global styles={reset}></Global>
        {getLayout(<Component {...pageProps} />)}
      </Content>
    </Overlay>
  );
}

export default App;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--overlay);
  height: 100vh;
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
`;
