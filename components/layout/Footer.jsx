import styled from "@emotion/styled";
import React from "react";

function Footer() {
  return (
    <Wrapper>
      <Copyright>Copyright 2022 ma9pie All rights reserved</Copyright>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  background-color: var(--subBg);
  & * {
    background-color: inherit;
  }
`;

const Copyright = styled.p`
  font-size: var(--xs);
  text-align: right;
  line-height: 40px;
`;
