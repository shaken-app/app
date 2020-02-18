export interface Item {
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

type NamedItems = {
  [key: string]: Item;
};

const namedItems: NamedItems = {
  cocktail: {
    name: "cocktail",
    plural: "cocktails",
    capitalize: { name: "Cocktail", plural: "Cocktails" },
    uppercase: { name: "COCKTAIL", plural: "COCKTAILS" }
  },
  glass: {
    name: "glass",
    plural: "glasses",
    capitalize: { name: "Glass", plural: "Glasses" },
    uppercase: { name: "GLASS", plural: "GLASSES" }
  }
};

const itemList = Object.keys(namedItems);
const pluralize = (query: string): string => namedItems[query].plural;

export const API = process.env.api;

export { namedItems, itemList, pluralize };
