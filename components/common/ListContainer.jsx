import styled from "@emotion/styled";
import React from "react";
import CsSvg from "@/svg/CsSvg";
import CssSvg from "@/svg/CssSvg";
import FrontendSvg from "@/svg/FrontendSvg";
import JavascriptSvg from "@/svg/JavascriptSvg";
import ReactSvg from "@/svg/ReactSvg";

const ListContainer = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>
        {title === "CS" && <CsSvg></CsSvg>}
        {title === "CSS" && <CssSvg></CssSvg>}
        {title === "JavaScript" && <JavascriptSvg></JavascriptSvg>}
        {title === "React" && <ReactSvg></ReactSvg>}
        {title === "Frontend" && (
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
