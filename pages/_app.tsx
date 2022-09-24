import { ApolloProvider } from "@apollo/client";
import { hygraph } from "@core/services";
import type { AppProps } from "next/app";
import "../public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={hygraph}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
