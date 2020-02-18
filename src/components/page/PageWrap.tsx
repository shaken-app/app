import React, { ReactNode } from "react";
import styled from "styled-components";

const PageWrap = styled.div`
  padding: 30px;
  max-height: calc(100vh - 40px);
  box-sizing: border-box;
  position: relative;
  flex-grow: 1;
  max-width: 1000px;
  margin: auto;
  width: 100%;
`;

export default ({ children }: { children: ReactNode }) => (
  <PageWrap>{children}</PageWrap>
);
