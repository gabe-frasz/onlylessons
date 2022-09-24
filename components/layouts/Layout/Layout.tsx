import { LayoutProps } from "@core/types";
import Head from "next/head";

export const Layout = ({
  headTitle,
  description,
  center,
  className = "",
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{headTitle ?? "Next page with bash scripts"}</title>
        <meta name="description" content={description} />
      </Head>

      <div
        className={`min-h-screen flex flex-col ${
          center ? "justify-center items-center" : ""
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
};
