import Head from "next/head";
import React from "react";

function HeadComponent({ title = "프론트엔드 면접질문" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      ></meta>
    </Head>
  );
}

export default HeadComponent;
