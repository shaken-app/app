import React from "react";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

import { ViewItemHeader } from "../../src/common/ui/ViewItemHeader";
import styled from "styled-components";
import {
  deleteCocktail,
  READ_COCKTAIL_BY_ID
} from "../../src/common/resolvers";
import { Cocktail as CocktailProps } from "../../src/common/interfaces";
import { API } from "../../src/common/helpers";
import { request } from "graphql-request";
import Button from "../../src/common/ui/Button";
import PageWrap from "../../src/components/page/PageWrap";

const routeHome = () => Router.push({ pathname: "/" });

const Info = styled.p`
  white-space: pre-line;
`;

const CocktailInfo = ({ info, glass }: CocktailProps) => (
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

const Cocktail = ({ data, id }) => {
  if (!data) return <div>Loading</div>;

  console.log(data);

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

Cocktail.getInitialProps = async context => {
  const { id } = context.query;

  if (!id) return <div>Loading</div>;

  let data;
  await request(API, READ_COCKTAIL_BY_ID, { id }).then(found => (data = found));


  // const { data } = await useSWR(READ_COCKTAIL_BY_ID, query =>
  //   request(API, query, { id })
  // );

  return { data, id };
};

export default Cocktail;
