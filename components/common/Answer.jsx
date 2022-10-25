import styled from "@emotion/styled";
import React from "react";

const Answer = (props) => {
  return (
    <Wrapper>
      <Text>{props.answer}</Text>
    </Wrapper>
  );
};

export default Answer;

const Wrapper = styled.div``;
const Text = styled.div`
  line-height: 24px;
  word-break: break-all;
`;
