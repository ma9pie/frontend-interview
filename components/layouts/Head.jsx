import Head from "next/head";
import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

export default HeadComponent;

HeadComponent.defaultProps = {
  title: "프론트엔드 면접질문",
};
