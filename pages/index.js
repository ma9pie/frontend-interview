import cs from "@/data/cs";
import css from "@/data/css";
import etc from "@/data/etc";
import frontend from "@/data/frontend";
import javascript from "@/data/javascript";
import react from "@/data/react";
import useThrottle from "@/hooks/useThrottle";
import styled from "@emotion/styled";
import React, { useState } from "react";
import List from "@/components/common/List";
import ListContainer from "@/components/common/ListContainer";
import Search from "@/components/common/Search";
import HomeLayout from "@/components/layouts/HomeLayout";

const data = [].concat(cs, css, javascript, react, frontend);

function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);

  // 입력 상태 관리
  const handleSearchWord = (e) => {
    const { value } = e.target;
    findWord(value.trim());
    setSearchWord(value);
  };

  // 입력 리셋
  const resetSearchWord = (e) => {
    setSearchWord("");
  };

  // 검색 결과
  const findWord = useThrottle((word) => {
    setResults(
      data.filter(
        (item) => item.question.includes(word) || item.answer.includes(word)
      )
    );
  }, 100);

  if (searchWord) {
    return (
      <Wrapper>
        <Search
          searchWord={searchWord}
          onChange={handleSearchWord}
          resetSearchWord={resetSearchWord}
        ></Search>
        {results.length === 0 ? (
          <NoResults>검색 결과가 없습니다.</NoResults>
        ) : (
          <ListContainer>
            {results.map((item, key) => (
              <List
                key={item.question}
                question={item.question}
                answer={item.answer}
              ></List>
            ))}
          </ListContainer>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Search searchWord={searchWord} onChange={handleSearchWord}></Search>
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
  return <HomeLayout>{page}</HomeLayout>;
};

const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  padding: 20px;
`;

const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--sub);
  height: calc(100vh - 300px);
`;
