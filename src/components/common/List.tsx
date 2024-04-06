import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

import Answer from '@/components/common/Answer';
import Question from '@/components/common/Question';
import useTrackEvent from '@/hooks/useTrackEvent';

interface Props {
  category: string;
  question: string;
  answer: string | null;
}

const List = ({ category, question, answer }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { trackClick } = useTrackEvent();

  const [height, setHeight] = useState('0px');
  const [isOpen, setIsOpen] = useState(false);

  const collapse = () => {
    trackClick('Accordion', `${category}/${question}`);
    const target = ref.current;
    if (!target) {
      return;
    }
    const { scrollHeight } = target;
    if (isOpen) {
      setIsOpen(false);
      setHeight(`${scrollHeight}px`);
      setTimeout(() => {
        setHeight('0px');
      }, 0);
    } else {
      setIsOpen(true);
      setHeight('0px');
      setTimeout(() => {
        setHeight(`${scrollHeight}px`);
      }, 0);
    }
  };

  return (
    <Wrapper>
      <QuestionWrapper onClick={collapse}>
        <Question
          isOpen={isOpen}
          question={question}
          answer={answer}
        ></Question>
      </QuestionWrapper>
      <AnswerWrapper ref={ref} height={height}>
        <Answer answer={answer}></Answer>
      </AnswerWrapper>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  margin-bottom: 24px;
`;
const QuestionWrapper = styled.span`
  cursor: pointer;
`;
const AnswerWrapper = styled.div<{ height: string }>`
  margin: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  height: ${({ height }) => height};
`;
