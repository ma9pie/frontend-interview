import styled from '@emotion/styled';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import DeleteSvg from '@/components/svg/DeleteSvg';
import SearchSvg from '@/components/svg/SearchSvg';

interface Props {
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

const Search = ({ searchWord, setSearchWord, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <Wrapper>
      <SearchSvg></SearchSvg>
      <Input
        type="text"
        name="searchWord"
        value={searchWord}
        onChange={handleChange}
      ></Input>
      {searchWord && <DeleteSvg onClick={() => setSearchWord('')}></DeleteSvg>}
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--sectionLine);
  border-radius: 10px;
  padding: 0px 16px;
  gap: 16px;
  input {
    flex: 1;
  }
`;
const Input = styled.input`
  height: 40px;
  border: 0px;
`;
