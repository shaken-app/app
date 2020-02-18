import React from "react";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

import { ViewItemHeader } from "../../common/ui/ViewItemHeader";
import { deleteGlass, READ_COCKTAIL_BY_ID } from "../../common/resolvers";
import { API } from "../../common/helpers";
import { request } from "graphql-request";

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
