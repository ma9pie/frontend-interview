import styled from "@emotion/styled";
import React from "react";
import Chevron from "@/components/common/Chevron";

const Question = (props) => {
  return (
    <Wrapper>
      <Chevron
        type={props.isOpenAnswer ? "up" : "down"}
        fill={props.isOpenAnswer ? "var(--mainText)" : "var(--subText)"}
      ></Chevron>
      <Text color={props.isOpenAnswer ? "var(--mainText)" : "var(--subText)"}>
        {props.question}
      </Text>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  line-height: 20px;
  margin-left: 10px;
  word-break: break-all;
  color: ${(props) => props.color};
`;
