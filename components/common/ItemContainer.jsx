import styled from "@emotion/styled";
import React from "react";

const ItemContainer = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>🚀 {title}</Title>
      {children}
    </Wrapper>
  );
};

export default ItemContainer;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.h2`
  font-size: var(--3xl);
  margin-bottom: 20px;
`;
