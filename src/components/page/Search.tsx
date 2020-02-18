import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_SEARCH } from "../../common/redux/actions";
import { State } from "../../common/redux/store";

const Search = styled.input`
  padding: 5px;
  border: 0 none;
  background: white;
  border-radius: 5px;
`;

export default () => {
  const { search } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const updateSearch = ({ target: { value } }: { target: { value: string } }) =>
    dispatch(UPDATE_SEARCH(value));

  return (
    <Search
      type="text"
      placeholder="search"
      value={search ? search.query : ""}
      onChange={updateSearch}
    />
  );
};
