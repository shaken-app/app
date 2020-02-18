import React from "react";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

import { request } from "graphql-request";
import { API } from "../../src/common/helpers";
import { deleteGlass, READ_COCKTAIL_BY_ID } from "../../src/common/resolvers";
import { ViewItemHeader } from "../../src/common/ui/ViewItemHeader";

const routeHome = () => Router.push({ pathname: "/" });

export default () => {
  const {
    query: { id }
  } = useRouter();

  const { data } = useSWR(READ_COCKTAIL_BY_ID, query =>
    request(API, query, { id })
  );

  if (!data) return <div>Loading</div>;

  return (
    <>
      <ViewItemHeader
        {...{
          deleteItem: () => deleteGlass(id),
          id: id.toString(),
          data: data.glass,
          type: "glass"
        }}
      />
    </>
  );
};
