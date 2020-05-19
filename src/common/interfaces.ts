import { ReactChild } from "react";

export interface ID {
  id: string;
  [e: string]: string;
}

interface PrismaCommonType {
  id: string;
  __typename: string;
}

export type GlassType = {
  name: string;
} & PrismaCommonType;

export type Glasses = GlassType[];

export type CocktailType = {
  name: string;
  info: string;
  glass: GlassType;
} & PrismaCommonType;

export type CocktailsType = CocktailType[];

export type ItemType = GlassType | CocktailType;

export type CommonElementType = {
  className?: string;
  children?: ReactChild | ReactChild[] | string;
  key?: string;
}

export interface InputElement extends CommonElementType {
  label: string;
  textarea?: boolean;
  id: string;
  required: boolean;
  value: string;
  onChange: (e: any) => void;
}

export interface ButtonElement extends CommonElementType {
  onClick: () => void;
}

export interface NamedItem {
  name: string;
  plural: string;
  capitalize: {
    name: string;
    plural: string;
  };
  uppercase: {
    name: string;
    plural: string;
  };
}

export interface ListItemsProps {
  type: string;
  path: string;
}

export interface AllQueries {
  read: {
    cocktails: any;
    glasses: any;
    [key: string]: any;
  };
  search: {
    cocktails: any;
    glasses: any;
    [key: string]: any;
  };
}
