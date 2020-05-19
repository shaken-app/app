import React from "react";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

import { ViewItemHeader } from "../../src/common/ui/ViewItemHeader";
import styled from "styled-components";
import {
  deleteCocktail,
  READ_COCKTAIL_BY_ID
} from "../../src/common/resolvers";
import { CocktailType } from "../../src/common/interfaces";
import { API } from "../../src/common/helpers";
import { request } from "graphql-request";
import Button from "../../src/common/ui/Button";
import PageWrap from "../../src/components/page/PageWrap";

const Info = styled.p`
  white-space: pre-line;
`;

const CocktailInfo = ({ info, glass }: CocktailType) => (
  <>
    <Info>{info}</Info>
    <h3>Glass:</h3>
    {glass && (
      <Button
        onClick={() =>
          Router.push({ pathname: "/glass", query: { id: glass.id } })
        }
      >
        {glass.name}
      </Button>
    )}
  </>
);

const Cocktail = () => {
  const {
    query: { id }
  } = useRouter();

  if(!id) return <div>Getting ID</div>;

  const { data } = useSWR<{ cocktail: CocktailType }>(
    READ_COCKTAIL_BY_ID,
    query => request(API, query, {id}),
    {
      refreshInterval: 600000
    }
  );

  console.log(data);

  if (!data) return <div>Loading..</div>;

  return (
    <PageWrap>
      <ViewItemHeader
        {...{
          deleteItem: () => deleteCocktail(id),
          id: id.toString(),
          data: data.cocktail,
          type: "cocktail"
        }}
      />
      <CocktailInfo {...data.cocktail} />
    </PageWrap>
  );
};

export default Cocktail;
