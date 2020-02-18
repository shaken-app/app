import React from "react";
import Router from "next/router";
import { request } from "graphql-request";
import useSWR from "swr";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { API } from "../../common/helpers";
import { AllQueries, ListItemsProps } from "../../common/interfaces";

import {
  READ_ALL_COCKTAILS,
  READ_ALL_GLASSES,
  SEARCH_COCKTAILS_BY_NAME,
  SEARCH_GLASSES_BY_NAME
} from "../../common/resolvers";
import Button from "../../common/ui/Button";
import { State } from "../../common/redux/store";

export const allQueries: AllQueries = {
  read: {
    glasses: READ_ALL_GLASSES,
    cocktails: READ_ALL_COCKTAILS
  },
  search: {
    cocktails: SEARCH_COCKTAILS_BY_NAME,
    glasses: SEARCH_GLASSES_BY_NAME
  }
};

const ItemButton = ({
  id,
  path,
  name
}: {
  id: string;
  path: string;
  name: string;
}) => (
  <Button
    key={id}
    onClick={() => {
      Router.push({
        pathname: path,
        query: { id }
      }).then(null);
    }}
  >
    {name}
  </Button>
);

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
`;

const ListItems = ({ type, path }: ListItemsProps) => {
  const {
    search: { query: name }
  } = useSelector((state: State) => state);

  const { data } = useSWR(
    allQueries[name.length > 2 ? "search" : "read"][type],
    query => request(API, query),
    {
      refreshInterval: 0
    }
  );

  return (
    <List>
      {data &&
        data[type].map(({ name, id }: { name: string; id: string }) => (
          <ItemButton {...{ id, path, name }} key={id} />
        ))}
      <Button
        onClick={() =>
          Router.push({ pathname: `/add`, query: { type } }).then(null)
        }
      >
        + Add New
      </Button>
    </List>
  );
};

export default ListItems;
