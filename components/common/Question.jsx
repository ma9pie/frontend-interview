import styled from "@emotion/styled";
import React from "react";
import Chevron from "@/components/common/Chevron";

const Question = (props) => {
  if (props.answer === null) {
    return (
      <Wrapper>
        <Text>{props.question}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Chevron
        type={props.isOpenAnswer ? "up" : "down"}
        fill={props.isOpenAnswer ? "var(--main)" : "var(--sub)"}
      ></Chevron>
      <Text
        color={
          props.isOpenAnswer || props.answer ? "var(--main)" : "var(--sub)"
        }
      >
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
  font-size: var(--lg);
  line-height: 24px;
  margin-left: 10px;
  word-break: break-all;
  color: ${(props) => props.color};
`;
