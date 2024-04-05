import styled from '@emotion/styled';
import React from 'react';

interface Props {
  answer: string | null;
}

const Answer = ({ answer }: Props) => {
  return (
    <Wrapper>
      {answer?.split('\n').map((item, key) => (
        <Text key={key}>{item}</Text>
      ))}
    </Wrapper>
  );
};

export default Answer;

const Wrapper = styled.div``;
const Text = styled.p`
  font-size: var(--base);
  color: var(--sub);
  line-height: 24px;
  min-height: 24px;
  word-break: break-all;
`;
