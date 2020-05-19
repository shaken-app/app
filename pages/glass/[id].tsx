import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { request } from "graphql-request";
import { API } from "../../src/common/helpers";
import { deleteGlass, READ_GLASS_BY_ID } from "../../src/common/resolvers";
import { ViewItemHeader } from "../../src/common/ui/ViewItemHeader";
import { GlassType } from "../../src/common/interfaces";

export default () => {
  const {
    query: { id }
  } = useRouter();

  if (!id) return <div>Loading...</div>;

  const { data } = useSWR<{ glass: GlassType }>(READ_GLASS_BY_ID, query =>
    request(API, query, { id })
  );

  console.log(data);

  if (!data) return <div>Loading</div>;

  return (
    <ViewItemHeader
      {...{
        deleteItem: () => deleteGlass(id),
        id: id.toString(),
        data: data.glass,
        type: "glass"
      }}
    />
  );
};
