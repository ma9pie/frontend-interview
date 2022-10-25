/**
 * [Title] 꺽쇠 모양의 화살표 <, >
 * [Description] props로 type("up","down","left","right")를 주면
 * 해당 방향의 꺽쇠 모양의 화살표를 반환
 * [Usage]
 * @props fill로 화살표 색 지정 가능. default는 var(--mainText)
 * [Referrence] bootstrap icon's HTML
 */
import styled from "@emotion/styled";
import React from "react";

function Chevron(props) {
  let degree = 0;

  switch (props.type) {
    case "up":
      degree = 0;
      break;
    case "right":
      degree = 90;
      break;
    case "down":
      degree = 180;
      break;
    case "left":
      degree = 270;
      break;

    default:
      break;
  }
  return (
    <Wrapper>
      <Svg {...props} degree={degree} viewBox="0 0 17 12">
        <path d="M8.5 0.5C8.17345 0.5 7.89492 0.627827 7.6452 0.893313L0.316949 8.56293C0.10565 8.76942 -3.73502e-07 9.04474 -3.87256e-07 9.35939C-4.15194e-07 9.99853 0.480226 10.5 1.11412 10.5C1.42147 10.5 1.7 10.3722 1.9113 10.1559L8.5 3.24336L15.0887 10.1559C15.3096 10.3722 15.5881 10.5 15.8955 10.5C16.5198 10.5 17 9.99853 17 9.35939C17 9.04474 16.8943 8.76942 16.6831 8.56293L9.3548 0.893313C9.10508 0.627827 8.82655 0.509832 8.5 0.5Z" />
      </Svg>
    </Wrapper>
  );
}

export default Chevron;

Chevron.defaultProps = {
  width: "17px", // 너비
  height: "12px", // 높이
  fill: "var(--mainText)", // 색
  margin: "0px",
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Svg = styled.svg`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  fill: ${(props) => props.fill};
  transform: ${(props) => `rotate(` + props.degree + `deg)`};
  background-color: inherit;
  user-select: none;
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.hoverFill};
  }
`;
