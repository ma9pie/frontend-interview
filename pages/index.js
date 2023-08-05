import { cs, css, etc, frontend, javascript, react } from "@/data";
import useThrottle from "@/hooks/useThrottle";
import styled from "@emotion/styled";
import React, { useState } from "react";
import List from "@/components/common/List";
import ListContainer from "@/components/common/ListContainer";
import Search from "@/components/common/Search";
import HomeLayout from "@/components/layouts/HomeLayout";

const data = [].concat(cs, css, javascript, react, frontend);

const list = [
  {
    category: "CS",
    data: cs,
  },
  {
    category: "CSS",
    data: css,
  },
  {
    category: "JavaScript",
    data: javascript,
  },
  {
    category: "React",
    data: react,
  },
  {
    category: "Frontend",
    data: frontend,
  },
  {
    category: "기타",
    data: etc,
  },
];
function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);

  // 입력 상태 관리
  const handleSearchWord = (e) => {
    const { value } = e.target;
    findWord(value.trim());
    setSearchWord(value);
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
          resetSearchWord={() => setSearchWord("")}
          onChange={handleSearchWord}
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

      {list.map(
        ({ category, data }) =>
          data.length > 0 && (
            <ListContainer key={category} title={category}>
              {data.map((item, key) => (
                <List
                  key={key}
                  category={category}
                  question={item.question}
                  answer={item.answer}
                ></List>
              ))}
            </ListContainer>
          )
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
