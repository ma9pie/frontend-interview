import cs from "@/data/cs";
import css from "@/data/css";
import etc from "@/data/etc";
import frontend from "@/data/frontend";
import javascript from "@/data/javascript";
import react from "@/data/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Item from "@/components/common/Item";
import ItemContainer from "@/components/common/ItemContainer";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  return (
    <Wrapper>
      {cs.length > 0 && (
        <ItemContainer title="CS">
          {cs.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}

      {css.length > 0 && (
        <ItemContainer title="CSS">
          {css.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}

      {javascript.length > 0 && (
        <ItemContainer title="JavaScript">
          {javascript.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}

      {react.length > 0 && (
        <ItemContainer title="React">
          {react.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}

      {frontend.length > 0 && (
        <ItemContainer title="Frontend">
          {frontend.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}

      {etc.length > 0 && (
        <ItemContainer title="기타">
          {etc.map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      )}
    </Wrapper>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Wrapper = styled.div`
  padding: 20px;
`;
