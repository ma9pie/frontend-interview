import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { Collapse } from "react-collapse";
import Answer from "@/components/common/Answer";
import Question from "@/components/common/Question";

const Item = (props) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);

  return (
    <Wrapper>
      <QuestionWrapper onClick={() => setIsOpenAnswer(!isOpenAnswer)}>
        <Question
          isOpenAnswer={isOpenAnswer}
          question={props.question}
          answer={props.answer}
        ></Question>
      </QuestionWrapper>
      <Collapse
        isOpened={isOpenAnswer}
        initialStyle={{ height: 0, overflow: "hidden" }}
      >
        <AnswerWrapper className={isOpenAnswer ? Open : Close}>
          <Answer answer={props.answer}></Answer>
        </AnswerWrapper>
      </Collapse>
    </Wrapper>
  );
};

export default Item;

const Open = css`
  opacity: 1;
`;
const Close = css`
  opacity: 0;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;
const QuestionWrapper = styled.span`
  cursor: pointer;
`;
const AnswerWrapper = styled.div`
  padding: 8px;
  transition: opacity 0.5s ease;
`;
