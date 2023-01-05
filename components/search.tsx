import React from "react";
import styled from "styled-components";
import { useState } from "react";

type Props = {
  onReset: Function;
  onSearch: Function;
};

function Search({ onSearch, onReset }: Props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <StyledInput
          placeholder="Search"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <StyledButton
          onClick={() => {
            // refetch({ name: search });
            onSearch({ name: search });
          }}
        >
          search
        </StyledButton>
        <StyledButton
          onClick={() => {
            onReset();
            setSearch("");
          }}
        >
          reset
        </StyledButton>
      </Container>
    </div>
  );
}

export default Search;

//style
const Container = styled.div`
  padding: 1em;
  margin-bottom: 2em;
  justify-content: center;
`;
const StyledButton = styled.button`
  padding: 0.7em;
  margin: 0.5em;
  background: white;
  color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
const StyledInput = styled.input`
  padding: 0.7em;
  margin: 0.5em;
  background: white;
  color: black;
  border: none;
  border-radius: 15px;
`;
