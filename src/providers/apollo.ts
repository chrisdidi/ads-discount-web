import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { LOCALSTORAGE_TOKEN } from "../constants";

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

export const isLoggedInVar = makeVar<boolean>(Boolean(token));
export const authTokenVar = makeVar<string | null>(token);

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

// if authentication was handled!

// const authLink = setContext((_, { headers}) => {
//     return {
//         headers: {
//             ...headers,
//             ...(Boolean(authTokenVar()) ? { authorization: `Bearer ${authTokenVar}`} : {}),
//         }
//     }
// })

const cache = new InMemoryCache({
  // caching options example
  // typePolicies: {
  //     Query: {
  //   fields: {
  //     isLoggedIn: {
  //       read() {
  //         return isLoggedInVar();
  //       },
  //     },
  //     token: {
  //       read() {
  //         return authTokenVar();
  //       },
  //     },
  //   },
  // },
  // }
});

export const client = new ApolloClient({
  link: httpLink,
  cache,
});
