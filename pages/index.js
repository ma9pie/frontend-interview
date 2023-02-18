import cs from "@/data/cs";
import css from "@/data/css";
import etc from "@/data/etc";
import frontend from "@/data/frontend";
import javascript from "@/data/javascript";
import react from "@/data/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import List from "@/components/common/List";
import ListContainer from "@/components/common/ListContainer";
import CommonLayout from "@/layouts/CommonLayout";

function Home() {
  return (
    <Wrapper>
      {cs.length > 0 && (
        <ListContainer title="CS">
          {cs.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}

      {css.length > 0 && (
        <ListContainer title="CSS">
          {css.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}

      {javascript.length > 0 && (
        <ListContainer title="JavaScript">
          {javascript.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}

      {react.length > 0 && (
        <ListContainer title="React">
          {react.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}

      {frontend.length > 0 && (
        <ListContainer title="Frontend">
          {frontend.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}

      {etc.length > 0 && (
        <ListContainer title="기타">
          {etc.map((item, key) => (
            <List
              key={key}
              question={item.question}
              answer={item.answer}
            ></List>
          ))}
        </ListContainer>
      )}
    </Wrapper>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div`
  padding: 20px;
`;
