import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import ScrollBar from "@/components/common/ScrollBar";
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
  height: 100vh;
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0px auto;

  /* overflow-y: scroll;
  overflow-x: hidden; */

  /* overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4f0d92;
    border-radius: 5px;
  } */
`;
