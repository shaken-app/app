import { ReactChild } from "react";

export interface ID {
  id: string;
  [e: string]: string;
}

interface PrismaCommon {
  id: string;
  __typename: string;
}

export interface Glass extends PrismaCommon {
  name: string;
}

export interface Cocktail extends PrismaCommon {
  name: string;
  info: string;
  glass: Glass;
}

export interface CommonElement {
  className?: string;
  children?: ReactChild | ReactChild[] | string;
  key?: string;
}

export interface InputElement extends CommonElement {
  label: string;
  textarea?: boolean;
  id: string;
  required: boolean;
  value: string;
  onChange: (e: any) => void;
}

export interface ButtonElement extends CommonElement {
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
