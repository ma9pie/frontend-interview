import styled from "@emotion/styled";
import React from "react";
import DeleteSvg from "@/svg/DeleteSvg";
import SearchSvg from "@/svg/SearchSvg";

function Search({ searchWord, setSearchWord, onChange }) {
  return (
    <Wrapper>
      <SearchSvg></SearchSvg>
      <Input
        type="text"
        name="searchWord"
        value={searchWord}
        onChange={onChange}
      ></Input>
      {searchWord && <DeleteSvg onClick={() => setSearchWord("")}></DeleteSvg>}
    </Wrapper>
  );
}

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
