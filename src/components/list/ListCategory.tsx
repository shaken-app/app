import React from "react";
import styled from "styled-components";

import ListItems from "./ListItems";

interface ListCategory {
  capitalize: {
    plural: string;
  };
  name: string;
  plural: string;
}

const CategoryTitle = styled.h2`
  color: white;
`;

const ListCategory = ({
  capitalize,
  name,
  plural
}: ListCategory) => (
  <>
    <CategoryTitle>{capitalize.plural}</CategoryTitle>
    <ListItems {...{ type: plural, path: `/${name}` }} />
  </>
);

export { ListCategory };
