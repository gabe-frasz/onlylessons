import { ApolloProvider } from "@apollo/client";
import { hygraph } from "@core/services";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "../public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={hygraph}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
