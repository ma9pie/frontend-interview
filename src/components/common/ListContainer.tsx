import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

import CssSvg from '@/components/svg/CssSvg';
import CsSvg from '@/components/svg/CsSvg';
import FrontendSvg from '@/components/svg/FrontendSvg';
import JavascriptSvg from '@/components/svg/JavascriptSvg';
import ReactSvg from '@/components/svg/ReactSvg';

interface Props {
  title: string;
  children: ReactNode;
}

const ListContainer = ({ title, children }: Props) => {
  return (
    <Wrapper>
      <Title>
        {title === 'CS' && <CsSvg></CsSvg>}
        {title === 'CSS' && <CssSvg></CssSvg>}
        {title === 'JavaScript' && <JavascriptSvg></JavascriptSvg>}
        {title === 'React' && <ReactSvg></ReactSvg>}
        {title === 'Frontend' && (
          <FrontendSvg color="var(--main)"></FrontendSvg>
        )}
        <Text>{title}</Text>
      </Title>
      {children}
    </Wrapper>
  );
};

export default ListContainer;

const Wrapper = styled.div``;
const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: var(--3xl);
  margin-left: 8px;
`;
