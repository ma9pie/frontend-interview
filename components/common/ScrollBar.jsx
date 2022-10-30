import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";

function ScrollBar({
  width,
  height,
  maxHeight,
  setHeight,
  targetRef,
  children,
}) {
  // 창 크기
  const resizeListener = useCallback(() => {
    setHeight(targetRef?.current?.offsetHeight);
  }, []);

  // resize 리스너 실행
  useEffect(() => {
    resizeListener();
  }, [resizeListener]);

  // resize 이벤트
  useEffect(() => {
    window.addEventListener("resize", resizeListener, { passive: true });
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  return <SimpleBar style={{ width, height, maxHeight }}>{children}</SimpleBar>;
}

export default ScrollBar;

ScrollBar.defaultProps = {
  width: "100%",
  height: "auto",
  setHeight: () => {},
};
