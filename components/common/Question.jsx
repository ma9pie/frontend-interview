import styled from "@emotion/styled";
import React from "react";
import Chevron from "@/components/common/Chevron";

const Question = ({ answer, question, isOpen }) => {
  if (answer === null) {
    return (
      <Wrapper>
        <Text>{question}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Chevron
        type={isOpen ? "up" : "down"}
        fill={isOpen ? "var(--main)" : "var(--sub)"}
      ></Chevron>
      <Text color={isOpen || answer ? "var(--main)" : "var(--sub)"}>
        {question}
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
