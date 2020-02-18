import React from "react";
import PageWrap from "../src/components/page/PageWrap";
import List from "../src/components/list/List";

const Cocktail = (props: { view: string }) => (
  <PageWrap>
    <List {...props} view={"cocktail"} />
  </PageWrap>
);

export default Cocktail;
