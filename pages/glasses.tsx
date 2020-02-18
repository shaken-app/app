import React from "react";
import PageWrap from "../src/components/page/PageWrap";
import List from "../src/components/list/List";

const Glass = props => (
  <PageWrap>
    <List {...props} view={"glass"} />
  </PageWrap>
);

export default Glass;
