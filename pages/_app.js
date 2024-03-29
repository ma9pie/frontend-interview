import useTrackEvent from "@/hooks/useTrackEvent";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import "@/styles/app.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  const { initializeGA, trackPageView } = useTrackEvent();

  // Init GA4
  useEffect(() => {
    initializeGA();
  }, []);

  // 페이지 view 추적
  useEffect(() => {
    trackPageView();
  }, [router.pathname]);

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
    <Wrapper>
      <Content>{getLayout(<Component {...pageProps} />)}</Content>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: var(--wrapperBg);
  height: 100%;
`;
const Content = styled.div`
  min-width: 360px;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  overflow: hidden;
`;
