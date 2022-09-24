import { NextHeadProps } from "@core/types";
import Head from "next/head";

export const NextHead = ({ title, description, children }: NextHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {children}
    </Head>
  );
};
