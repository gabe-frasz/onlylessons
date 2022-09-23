import { ApolloClient, InMemoryCache } from "@apollo/client";

export const hygraph = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6rdlg880apy01uq6k68et2t/master",
  cache: new InMemoryCache(),
});
