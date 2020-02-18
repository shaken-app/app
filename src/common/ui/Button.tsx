import React from "react";
import styled from "styled-components";
import { ButtonElement } from "../interfaces";

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 0 none;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
  grid-auto-flow: column;
  position: relative;
  display: inline-grid;
  color: #372d27;

  &:after {
    border-radius: 4px;
    content: "";
    box-shadow: 0 0 0 0 #fff, 4px 4px 8px rgba(0, 0, 0, 0.1);
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: skew(-8deg);
    transition: all 0.2s cubic-bezier(0.77, -0.01, 0.82, 1.48);
    &:hover:after {
      box-shadow: 0px -2px 0 4px #fff, 4px 11px 8px rgba(0, 0, 0, 0.1);
      transform: skew(0deg);
    }
  }
`;

const Label = styled.span`
  position: relative;
  z-index: 2;
`;

export default ({ onClick, className, children, ...rest }: ButtonElement) => (
  <Button {...rest} onClick={onClick}>
    <Label>{children}</Label>
  </Button>
);
