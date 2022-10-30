import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";

function ScrollBar({ width, height, maxHeight, children }) {
  return <SimpleBar style={{ width, height, maxHeight }}>{children}</SimpleBar>;
}

export default ScrollBar;

ScrollBar.defaultProps = {
  width: "100%",
  height: "auto",
};
