import React, { ReactNode } from "react";
import Meta from "./Meta";
import Header from "../src/common/ui/Header";
import styled from "styled-components";

const PageRoot = styled.div`
  margin: 0;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }: { children: ReactNode }) => (
  <>
    <Meta />
    <PageRoot>
      <Header />
      {children}
    </PageRoot>
  </>
);

export default Page;
