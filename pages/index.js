import questionList from "@/public/static/questionList";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Item from "@/components/common/Item";
import ItemContainer from "@/components/common/ItemContainer";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  return (
    <Wrapper>
      {Object.keys(questionList).map((subject, key) => (
        <ItemContainer key={key} title={subject}>
          {questionList[subject].map((item, key) => (
            <Item
              key={key}
              question={item.question}
              answer={item.answer}
            ></Item>
          ))}
        </ItemContainer>
      ))}
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
