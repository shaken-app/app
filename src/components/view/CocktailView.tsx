import React from "react";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

import { ViewItemHeader } from "../../common/ui/ViewItemHeader";
import styled from "styled-components";
import { deleteCocktail, READ_COCKTAIL_BY_ID } from "../../common/resolvers";
import { Cocktail } from "../../common/interfaces";
import { API } from "../../common/helpers";
import { request } from "graphql-request";
import Button from "../../common/ui/Button";

const routeHome = () => Router.push({ pathname: "/" });

const Info = styled.p`
  white-space: pre-line;
`;

const CocktailInfo = ({ info, glass }: Cocktail) => (
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

export default () => {
  const {
    query: { id }
  } = useRouter();

  const { data } = useSWR(READ_COCKTAIL_BY_ID, query =>
    request(API, query, { id })
  );

  console.log(data);

  if (!data) return <div>Loading</div>;

  return (
    <>
      <ViewItemHeader
        {...{
          deleteItem: () => deleteCocktail(id),
          id: id.toString(),
          data: data.cocktail,
          type: "cocktail"
        }}
      />
      <CocktailInfo {...data.cocktail} />
    </>
  );
};
