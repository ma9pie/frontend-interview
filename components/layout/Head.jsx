import Head from "next/head";
import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}

export default HeadComponent;

HeadComponent.defaultProps = {
  title: "프론트엔드 면접질문",
  description: "프론트엔드 면접 질문을 정리한 사이트입니다.",
};
