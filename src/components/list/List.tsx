import React from "react";

import { NamedItem } from "../../common/interfaces";
import { ListCategory } from "./ListCategory";
import { itemList, namedItems } from "../../common/helpers";

const findItem = (view: string): NamedItem => namedItems[view];
const castItems = (view: string) => (view === "all" ? itemList : [view]);

export default ({ view }: { view: string }) => (
  <>
    {castItems(view).map((itemName: string, i: number) => (
      <ListCategory {...findItem(itemName)} key={`list-item-${i}`} />
    ))}
  </>
);
