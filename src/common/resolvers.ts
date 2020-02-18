// Cocktails
import request from "graphql-request";
import { API } from "./helpers";

export const READ_ALL_COCKTAILS = `
  query READ_ALL_COCKTAILS {
    cocktails {
      name
      id
      info
      glass {
        id
        name
      }
    }
  }
`;

export const READ_COCKTAIL_BY_ID = `
  query READ_COCKTAIL_BY_ID($id: ID!) {
    cocktail(where: { id: $id }) {
      name
      info
      glass {
        name
        id
      }
    }
  }
`;

export const READ_COCKTAILS_BY_GLASS = `
  query READ_COCKTAILS_BY_GLASS($id: ID!) {
    cocktails(where: { glass: { id: $id } }) {
      name
      id
    }
  }
`;

export const CREATE_COCKTAIL = `
  mutation CREATE_COCKTAIL($name: String!, $info: String!, $glass: ID) {
    createCocktail(
      name: $name
      info: $info
      glass: { connect: { id: $glass } }
    ) {
      id
    }
  }
`;

export const DELETE_COCKTAIL = `
  mutation DELETE_COCKTAIL($id: ID!) {
    deleteCocktail(where: { id: $id }) {
      id
      name
    }
  }
`;

export const deleteCocktail = id =>
  new Promise(resolve => {
    request(API, DELETE_COCKTAIL, { id }).then(data => resolve(data));
  });

export const UPDATE_COCKTAIL = `
  mutation UPDATE_COCKTAIL($id: ID!, $name: String, $info: String, $glass: ID) {
    updateCocktail(
      where: { id: $id }
      data: { name: $name, info: $info, glass: { connect: { id: $glass } } }
    ) {
      name
      info
      glass {
        name
      }
    }
  }
`;

export const SEARCH_COCKTAILS_BY_NAME = `
  query SEARCH_COCKTAILS_BY_NAME($name: String!) {
    cocktails(where: { name_contains: $name }) {
      name
      id
    }
  }
`;

// Glasses
export const READ_ALL_GLASSES = `
  query READ_ALL_GLASSES {
    glasses {
      name
      id
    }
  }
`;

export const READ_GLASS_BY_ID = `
  query READ_GLASS_BY_ID($id: ID!) {
    glass(where: { id: $id }) {
      name
      id
    }
  }
`;

export const SEARCH_GLASSES_BY_NAME = `
  query SEARCH_GLASSES_BY_NAME($name: String!) {
    glasses(where: { name_contains: $name }) {
      name
      id
    }
  }
`;

export const CREATE_GLASS = `
  mutation CREATE_GLASS($name: String!) {
    createGlass(name: $name) {
      id
    }
  }
`;

export const UPDATE_GLASS = `
  mutation UPDATE_GLASS($id: ID!, $name: String) {
    updateGlass(where: { id: $id }, data: { name: $name }) {
      name
    }
  }
`;

export const DELETE_GLASS = `
  mutation DELETE_GLASS($id: ID!) {
    deleteGlass(where: { id: $id }) {
      id
      name
    }
  }
`;

export const deleteGlass = id =>
  new Promise(resolve => {
    request(API, DELETE_GLASS, { id }).then(data => resolve(data));
  });
