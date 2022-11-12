import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Answer from "@/components/common/Answer";
import Question from "@/components/common/Question";

const Item = (props) => {
  const ref = useRef();
  const [height, setHeight] = useState("auto");
  const [isOpenAnswer, setIsOpenAnswer] = useState(true);

  const collapse = () => {
    const target = ref.current;
    const { clientHeight, scrollHeight } = target;
    if (isOpenAnswer) {
      setIsOpenAnswer(false);
      setHeight(`${scrollHeight}px`);
      setTimeout(() => {
        setHeight("0px");
      }, 0);
    } else {
      setIsOpenAnswer(true);
      setHeight("0px");
      setTimeout(() => {
        setHeight(`${scrollHeight}px`);
      }, 0);
    }
  };

  return (
    <Wrapper>
      <QuestionWrapper onClick={collapse}>
        <Question
          isOpenAnswer={isOpenAnswer}
          question={props.question}
          answer={props.answer}
        ></Question>
      </QuestionWrapper>
      <AnswerWrapper ref={ref} height={height}>
        <Answer answer={props.answer}></Answer>
      </AnswerWrapper>
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
  margin: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  height: ${(props) => props.height}; ;
`;
