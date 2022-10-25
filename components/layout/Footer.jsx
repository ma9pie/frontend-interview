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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  height: 40px;
  background-color: var(--subBg);
  & * {
    background-color: inherit;
  }
`;

const Copyright = styled.p``;
