import Router from "next/router";
import React from "react";
import styled from "styled-components";
import { ItemType } from "../interfaces";
import { Pencil } from "../icons";
import Button from "./Button";

interface ViewItemHeader {
  deleteItem: any;
  id: string;
  data: ItemType;
  type: "glass" | "cocktail";
}

const EditIcon = styled(Pencil)`
  width: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  align-items: center;
`;

export const ViewItemHeader = ({
  deleteItem,
  id,
  data,
  type
}: ViewItemHeader) => (
  <Header>
    <h1>{data && data.name}</h1>
    <Button
      onClick={() => Router.push({ pathname: `/add`, query: { id, type } })}
    >
      <EditIcon />
      <span>Edit</span>
    </Button>
    <Button onClick={deleteItem}>Delete</Button>
  </Header>
);
