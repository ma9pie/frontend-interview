import styled from "@emotion/styled";
import React, { useState } from "react";
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
      {isOpenAnswer && (
        <AnswerWrapper>
          <Answer answer={props.answer}></Answer>
        </AnswerWrapper>
      )}
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;
const QuestionWrapper = styled.span`
  cursor: pointer;
`;
const AnswerWrapper = styled.div`
  padding: 8px;
`;
