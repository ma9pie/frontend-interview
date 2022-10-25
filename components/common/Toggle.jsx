import styled from "@emotion/styled";
import React from "react";

const Toggle = (props) => {
  return (
    <Container>
      <CheckBox type="checkbox" {...props}></CheckBox>
      <Slider
        htmlFor={props.id}
        {...props}
        sliderColor={props.checked ? "#fcd034" : "#ffffff"}
      ></Slider>
    </Container>
  );
};

export default Toggle;

Toggle.defaultProps = {
  id: "checkbox1", // 체크박스 id
  width: "56px", // 토글 너비
  height: "28px", // 토글 높이
  margin: "0px", // 토글 마진
  padding: "0px", // 토글 패딩
  gap: "2.5px", // 슬라이더와 토글 테두리 사이의 간격
  toggleOffBackground: "var(--gray400)", // off 상태의 토글 배경
  toggleOnBackground: "var(--bg)", // on 상태의 토글 배경
};

const Container = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.height};
  background-color: ${(props) => props.toggleOffBackground};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${(props) => `calc(${props.height} - ${props.gap} - ${props.gap})`};
    height: ${(props) => `calc(${props.height} - ${props.gap} - ${props.gap})`};
    margin: ${(props) => props.gap};
    background: ${(props) => props.sliderColor};
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px;
  transition: background-color 0.2s ease-in-out;
  &:checked + label {
    background: ${(props) => props.toggleOnBackground};
    &::after {
      margin-left: ${(props) =>
        `calc(${props.width} - ${props.height} + ${props.gap})`};
    }
  }
`;
