import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import CsSvg from "@/svg/CsSvg";
import CssSvg from "@/svg/CssSvg";
import FrontendSvg from "@/svg/FrontendSvg";
import JavascriptSvg from "@/svg/JavascriptSvg";
import ReactSvg from "@/svg/ReactSvg";

const ItemContainer = ({ title, children }) => {
  const imageSelector = (title) => {
    switch (title) {
      case "CS":
        return (
          <Title>
            <CsSvg></CsSvg>
            <Text>{title}</Text>
          </Title>
        );
      case "CSS":
        return (
          <Title>
            <CssSvg></CssSvg>
            <Text>{title}</Text>
          </Title>
        );
      case "JavaScript":
        return (
          <Title>
            <JavascriptSvg></JavascriptSvg>
            <Text>{title}</Text>
          </Title>
        );
      case "React":
        return (
          <Title>
            <ReactSvg></ReactSvg>
            <Text>{title}</Text>
          </Title>
        );
      case "Frontend":
        return (
          <Title>
            <FrontendSvg color="var(--main)"></FrontendSvg>
            <Text>{title}</Text>
          </Title>
        );
      default:
        return (
          <Title>
            <Text>{title}</Text>
          </Title>
        );
    }
  };

  return (
    <Wrapper>
      {imageSelector(title)}
      {children}
    </Wrapper>
  );
};

export default ItemContainer;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: var(--3xl);
  margin-left: 8px;
`;
