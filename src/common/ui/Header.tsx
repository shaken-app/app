import React from "react";

import link from "next/link";
import styled from "styled-components";
import Search from "../../components/page/Search";

const Link = link;

const Header = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-template-columns: 1fr;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
`;

const LogoLink = styled.div`
  color: inherit;
  text-decoration: none;
  font-family: Core Sans, sans-serif;
  font-size: 40px;
  font-weight: 900;
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  grid-gap: 10px;
  background: -webkit-linear-gradient(#fff, #fff, #d8d8d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 116">
    <defs>
      <linearGradient id="myGradient" gradientTransform="rotate(90)">
        <stop offset="5%" stopColor="#FDC830" />
        <stop offset="95%" stopColor="#F37335" />
      </linearGradient>
    </defs>
    <path
      fill="url('#myGradient')"
      d="M127 2l-5-2H6a6 6 0 0 0-6 7l23 104c1 3 3 5 6 5h70c3 0 5-2 6-5L128 7l-1-5zM64 87a29 29 0 1 1 0-58 29 29 0 0 1 0 58z"
    />
  </svg>
);

const Logo = styled(LogoSvg)`
  width: 36px;
`;

export default () => (
  <Header>
    <Link href="/">
      <LogoLink>
        <Logo />
        Shaken
      </LogoLink>
    </Link>
    <Search />
  </Header>
);
