import { cs, css, etc, frontend, javascript, react } from "@/data";
import useDebounce from "@/hooks/useDebounce";
import useThrottle from "@/hooks/useThrottle";
import useTrackEvent from "@/hooks/useTrackEvent";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useEffect } from "react";
import List from "@/components/common/List";
import ListContainer from "@/components/common/ListContainer";
import Search from "@/components/common/Search";
import HomeLayout from "@/components/layouts/HomeLayout";

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
  const { trackSearch } = useTrackEvent();

  const [searchWord, setSearchWord] = useState("");
  const [filterdList, setFilterdList] = useState([]);

  useEffect(() => {
    updateList(searchWord);
  }, [searchWord]);

  // 입력 상태 관리
  const handleSearchWord = (e) => {
    const value = e.target.value.trim();
    setSearchWord(value);
    debouncedTrackSearch(value);
  };

  // 검색 결과
  const updateList = useThrottle((word) => {
    const _list = [];
    list.map(({ category, data }) => {
      const _data = data.filter(
        ({ question, answer }) =>
          question?.includes(word) || answer?.includes(word)
      );
      if (_data.length === 0) return;
      _list.push({
        category: category,
        data: _data,
      });
    });
    setFilterdList(_list);
  }, 100);

  // 검색어 추적
  const debouncedTrackSearch = useDebounce((word) => {
    trackSearch(word);
  }, 1000);

  return (
    <Wrapper>
      <Search
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        onChange={handleSearchWord}
      ></Search>

      {(() => {
        const length = filterdList.map(({ data }) => data).length;
        if (searchWord && length === 0) {
          return <NoResults>검색 결과가 없습니다.</NoResults>;
        } else {
          return filterdList.map(
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
          );
        }
      })()}
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
