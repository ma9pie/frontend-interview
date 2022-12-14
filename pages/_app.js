import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoogleAnalyticsUtils from "@/utils/GoogleAnalyticsUtils";
import "@/styles/reset.scss";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import "@/styles/simplebar.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  // 구글 애널리틱스 조회수 측정
  useEffect(() => {
    const handleRouteChange = (url) => {
      GoogleAnalyticsUtils.changeRouteGtag(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // viewHeight 설정
  useEffect(() => {
    setViewHeight();
    window.addEventListener("resize", setViewHeight);
    return () => {
      window.removeEventListener("resize", setViewHeight);
    };
  });

  const setViewHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", `${window.innerHeight}px`);
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
  height: 100%;
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;
