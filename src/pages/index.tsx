import styled from '@emotion/styled';
import debounce from 'lodash/debounce';
import React, { useState } from 'react';
import { useEffect, useMemo } from 'react';

import List from '@/components/common/List';
import ListContainer from '@/components/common/ListContainer';
import Search from '@/components/common/Search';
import HomeLayout from '@/components/layouts/HomeLayout';
import {
  CS_LIST,
  CSS_LIST,
  ETC_LIST,
  FRONTEND_LIST,
  JAVASCRIPT_LIST,
  REACT_LIST,
} from '@/constants';
import useTrackEvent from '@/hooks/useTrackEvent';

interface ListItem {
  category: string;
  data: { importance: string; question: string; answer: string | null }[];
}

const LIST: ListItem[] = [
  {
    category: 'CS',
    data: CS_LIST,
  },
  {
    category: 'CSS',
    data: CSS_LIST,
  },
  {
    category: 'JavaScript',
    data: JAVASCRIPT_LIST,
  },
  {
    category: 'React',
    data: REACT_LIST,
  },
  {
    category: 'Frontend',
    data: FRONTEND_LIST,
  },
  {
    category: '기타',
    data: ETC_LIST,
  },
];

const Home = () => {
  const { trackSearchEvent } = useTrackEvent();

  const [searchWord, setSearchWord] = useState('');
  const [filterdList, setFilterdList] = useState<ListItem[]>([]);

  useEffect(() => {
    updateList();
  }, [searchWord]);

  // 입력 상태 관리
  const handleSearchWord = (value: string) => {
    setSearchWord(value);
    debouncedTrackSearch(value);
  };

  const debouncedTrackSearch = useMemo(
    () =>
      debounce((value: string) => {
        const _value = value.trim();
        if (_value) {
          trackSearchEvent(value);
        }
      }, 1000),
    []
  );

  // 검색 결과
  const updateList = () => {
    const _list: ListItem[] = [];
    LIST.map(({ category, data }) => {
      const _data = data.filter(
        ({ question, answer }) =>
          question?.includes(searchWord) || answer?.includes(searchWord)
      );
      if (_data.length === 0) return;
      _list.push({
        category: category,
        data: _data,
      });
    });
    setFilterdList(_list);
  };

  return (
    <HomeLayout>
      <Container>
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
                    {data.map(({ question, answer }, key) => (
                      <List
                        key={key}
                        category={category}
                        question={question}
                        answer={answer}
                      ></List>
                    ))}
                  </ListContainer>
                )
            );
          }
        })()}
      </Container>
    </HomeLayout>
  );
};

export default Home;

const Container = styled.div`
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
