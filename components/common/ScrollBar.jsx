import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * 스크롤바 컴포넌트
 * @refference https://stackblitz.com/edit/react-ts-frji5h?file=style.css
 */

const ScrollBar = (props) => {
  const contentRef = useRef();
  const scrollTrackRef = useRef();
  const scrollThumbRef = useRef();
  const observer = useRef();

  const [thumbHeight, setThumbHeight] = useState(20);
  const [scrollStartPosition, setScrollStartPosition] = useState(null);
  const [initialScrollTop, setInitialScrollTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // thumb 높이 조정
  const handleResize = () => {
    if (!contentRef.current || !scrollTrackRef.current) {
      return;
    }
    setThumbHeight(
      Math.max(
        (contentRef.current.clientHeight / contentRef.current.scrollHeight) *
          scrollTrackRef.current.clientHeight,
        20
      )
    );
  };

  // 트랙 클릭 이벤트
  const handleTrackClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const trackCurrent = scrollTrackRef.current;
      const contentCurrent = contentRef.current;
      if (trackCurrent && contentCurrent) {
        const { clientY } = e;
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = -(thumbHeight / 2);
        const clickRatio =
          (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
        const scrollAmount = Math.floor(
          clickRatio * contentCurrent.scrollHeight
        );
        contentCurrent.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [thumbHeight]
  );

  const handleThumbPosition = useCallback(() => {
    if (
      !contentRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }
    const { scrollTop, scrollHeight } = contentRef.current;
    const { clientHeight } = scrollTrackRef.current;
    let newTop = (+scrollTop / +scrollHeight) * clientHeight;
    newTop = Math.min(newTop, clientHeight - thumbHeight);
    const thumb = scrollThumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, []);

  const handleThumbMousedown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleThumbMousemove = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const { scrollHeight, offsetHeight } = contentRef.current;

        const deltaY =
          (e.clientY - scrollStartPosition) * (offsetHeight / thumbHeight);
        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          scrollHeight - offsetHeight
        );

        contentRef.current.scrollTop = newScrollTop;
      }
    },
    [isDragging, scrollStartPosition, thumbHeight]
  );

  useEffect(() => {
    handleResize();
  }, [props]);

  // ResizeObserver를 통한 thumb높이 조정, 스크롤 이벤트 등록 및 해제
  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientHeight } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, clientHeight);
      });
      observer.current.observe(ref);
      ref.addEventListener("scroll", handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }
  }, [props.height]);

  // 마우스로 thumb를 drag하는 이벤트 등록 및 해제
  useEffect(() => {
    window.addEventListener("mousemove", handleThumbMousemove);
    window.addEventListener("mouseup", handleThumbMouseup);
    window.addEventListener("mouseleave", handleThumbMouseup);
    return () => {
      window.removeEventListener("mousemove", handleThumbMousemove);
      window.removeEventListener("mouseup", handleThumbMouseup);
      window.removeEventListener("mouseleave", handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  return (
    <Container ref={props.containerRef}>
      <Content ref={contentRef} height={props.height}>
        {props.children}
      </Content>
      <ScrollBarWrapper height={props.height}>
        <ScrollBarContainer>
          <Track ref={scrollTrackRef} onClick={handleTrackClick}></Track>
          <Thumb
            className="scrollbar-thumb"
            ref={scrollThumbRef}
            onMouseDown={handleThumbMousedown}
            height={`${thumbHeight}px`}
          ></Thumb>
        </ScrollBarContainer>
      </ScrollBarWrapper>
    </Container>
  );
};

export default ScrollBar;

ScrollBar.defaultProps = {
  touchBottom: () => {},
};

const Container = styled.div`
  height: 100%;
  position: relative;
  .scrollbar-thumb {
    opacity: 0;
  }
  &:hover {
    .scrollbar-thumb {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  -ms-overflow-style: none;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: ${(props) => props.height};
`;
const ScrollBarWrapper = styled.div`
  position: absolute;
  height: ${(props) => props.height};
  right: 0px;
  top: 0px;
`;
const ScrollBarContainer = styled.div`
  display: block;
  height: 100%;
  position: relative;
  width: 8px;
  z-index: 1;
`;
const Track = styled.div`
  border-radius: 12px;
  bottom: 0;
  position: absolute;
  top: 0;
  width: 4px;
  cursor: pointer;
`;
const Thumb = styled.div`
  border-radius: 12px;
  background-color: var(--selected);
  position: absolute;
  width: 4px;
  height: ${(props) => props.height};
  transition: opacity 0.2s ease;
  cursor: pointer;
`;
